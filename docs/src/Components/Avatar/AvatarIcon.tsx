import React from 'react';
import {View, Animated, StyleProp, ViewStyle, ImageStyle} from 'react-native';
import Icon from 'Components/Core/Icon';
import {elevationShadowStyle} from 'Helpers/styleGenerator';
import Color from 'color';
import {ThemeTypes, useTheme} from 'Theming';
interface AvatarIconProps {
  elevation?: number;
  size?: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  padding?: number;
  color?: string;
  icon?: string;
  backgroundColor?: string;
  theme?: ThemeTypes;
  iconFontFamily?:
    | 'materialCommunity'
    | 'material'
    | 'simpleLine'
    | 'fa'
    | 'fa5'
    | 'fa5pro'
    | 'foundation'
    | 'evil'
    | 'octicons'
    | 'ionic'
    | 'feather'
    | 'entypo'
    | 'zocial';
}
const AvatarIcon: React.FC<AvatarIconProps> = ({
  icon,
  size = 32,
  padding,
  color,
  iconFontFamily = 'materialCommunity',
  backgroundColor,
  style,
  containerStyle,
  elevation,
  theme,
  ...props
}) => {
  theme = useTheme(theme);
  backgroundColor = backgroundColor || theme.color.primary;
  return (
    <Animated.View
      {...props}
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          padding,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        },
        elevationShadowStyle(elevation || 1),
        containerStyle,
      ]}>
      <Icon
        name={icon}
        size={(size * 2) / 3}
        color={
          Color(backgroundColor).isDark() && typeof color !== 'string'
            ? 'white'
            : color !== 'string'
            ? 'black'
            : color
        }
        family={iconFontFamily}
      />
    </Animated.View>
  );
};
AvatarIcon.displayName = 'Avatar.Icon';
export default AvatarIcon;
