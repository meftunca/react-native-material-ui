import React from 'react';
import {Animated, ViewProps} from 'react-native';
import {
  directionRepeat,
  elevationShadowStyle,
} from './../../Helpers/styleGenerator';
import {ThemeTypes, useTheme} from 'Theming';

type flexType =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | undefined;
export interface SurfaceProps extends ViewProps {
  padding?: number[] | string[] | number | string;
  margin?: number[] | string[] | number | string;
  justify?: flexType;
  alignItems?: flexType;
  alignContent?: flexType;
  cornerRaidus?: number;
  elevation?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  theme?: ThemeTypes;
}

const Surface: React.FC<SurfaceProps> = ({
  padding = 0,
  margin = 0,
  elevation = 0,
  style,
  direction = 'row',
  justify,
  cornerRaidus = 0,
  alignContent = 'center',
  alignItems,
  overflow = 'hidden',
  children,
  theme,
  ...otherProps
}) => {
  theme = useTheme(theme);
  let paddingControl =
    typeof padding === 'number' || typeof padding === 'string'
      ? {padding}
      : directionRepeat('padding', padding);
  let marginControl =
    typeof margin === 'number' || typeof margin === 'string'
      ? {margin}
      : directionRepeat('margin', margin);
  let styleObject: any = {
    borderRadius: cornerRaidus,
    backgroundColor: theme.color.surface,
    flexDirection: direction,
    justifyContent: justify
      ? justify
      : React.Children.count(children) > 1
      ? 'space-between'
      : 'center',
    alignContent,
    alignItems,
    ...paddingControl,
    ...marginControl,
    ...elevationShadowStyle(elevation),
  };

  return (
    <Animated.View {...otherProps} style={[styleObject, style].flat()}>
      {children}
    </Animated.View>
  );
};
Surface.displayName = 'Surface';
export default Surface;
