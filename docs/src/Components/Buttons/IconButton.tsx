import React from 'react';
import Ripple, {RippleProps} from './../Core/Ripple';
import Surface, {SurfaceProps} from './../Core/Surface';
import {ViewStyle, StyleProp, View} from 'react-native';
import Icon, {IconFontFamily} from '../Core/Icon';
import Color from 'color';
import {useTheme} from 'Theming';

export interface IconButtonProps extends RippleProps {
  iconFontFamily?: IconFontFamily;
  role?: 'icon' | 'chip';
  paperProps?: SurfaceProps;
  color?: // | string
  string | ('primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'text');
  backgroundColor?: string;
  size?: number;
  icon?: string;
  theme?: object;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
}
const IconButton: React.FC<IconButtonProps> = ({
  children,
  color = 'text',
  role = 'button',
  style,
  size = 24,
  iconFontFamily,
  backgroundColor,
  rippleStyle,
  theme,
  containerStyle,
  icon,
  ...props
}) => {
  const themeControl: any = useTheme(theme);
  const textColor: string =
    color && color in themeControl.color
      ? themeControl.color[color]
      : color
      ? color
      : themeControl.color.primary;
  return (
    <View
      pointerEvents="auto"
      style={[
        {
          borderRadius: size * 2,
          minHeight: size + (role === 'chip' ? 4 : 8),
          minWidth: size + (role === 'chip' ? 4 : 8),
        },
        containerStyle,
      ]}>
      <Ripple
        {...props}
        rippleContainerBorderRadius={size}
        style={[
          rippleStyle,
          {
            backgroundColor,
            borderRadius: size * 2,
          },
        ]}
        rippleColor={textColor}>
        {icon !== undefined && (
          <Icon
            name={icon}
            color={textColor}
            family={iconFontFamily}
            size={size}
            style={{margin: role === 'chip' ? 2 : 8, width: size, height: size}}
          />
        )}
      </Ripple>
    </View>
  );
};

export default IconButton;
