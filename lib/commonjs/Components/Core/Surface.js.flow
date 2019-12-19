import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  directionRepeat,
  elevationShadowStyle,
} from './../../Helpers/styleGenerator';

type paperType = {
  backgroundColor?: string;
};
export interface SurfaceThemeProps {
  paper?: paperType;
  color?: string;
}
type ReactNode =
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

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
  children?: ReactNode | ReactNode[];
  theme?: SurfaceThemeProps;
}
const defaultThemeProps: SurfaceThemeProps = {
  paper: {backgroundColor: 'white'},
  color: 'black',
};
const Surface: React.FC<SurfaceProps> = ({
  padding = [16, 16],
  margin = 0,
  elevation = 0,
  style,
  direction = 'row',
  justify,
  cornerRaidus = 2,
  alignContent = 'center',
  alignItems,
  overflow = 'hidden',
  children,
  theme = defaultThemeProps,
  ...otherProps
}) => {
  let styleObject: any = {
    overflow,
    borderRadius: cornerRaidus,
    ...theme.paper,
    flexDirection: direction,
    justifyContent: justify
      ? justify
      : React.Children.count(children) > 1
      ? 'space-between'
      : 'center',
    alignContent,
    alignItems,
  };
  let paddingControl =
    typeof padding === 'number' || typeof padding === 'string'
      ? {padding}
      : directionRepeat('padding', padding);
  let marginControl =
    typeof margin === 'number' || typeof margin === 'string'
      ? {margin}
      : directionRepeat('margin', margin);

  return (
    <View
      {...otherProps}
      style={[
        styleObject,
        paddingControl,
        marginControl,
        style,
        elevationShadowStyle(elevation),
      ]}>
      {children}
    </View>
  );
};
Surface.displayName = 'Surface';
export default Surface;
