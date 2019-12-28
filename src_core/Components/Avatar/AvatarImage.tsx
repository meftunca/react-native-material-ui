import React from 'react';
import {Image, Animated, ImageProps, StyleProp, ViewStyle} from 'react-native';
import {elevationShadowStyle} from '../../Helpers/styleGenerator';
import {ThemeTypes, useTheme} from '../../Theming';

export interface AvatarImageProps extends ImageProps {
  elevation?: number;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  padding?: number;
  color?: string;
  dense?: boolean;
  theme?: ThemeTypes;

  backgroundColor?: string;
}
const AvatarImage: React.FC<AvatarImageProps> = ({
  source,
  size = 32,
  padding,
  elevation,
  color,
  backgroundColor,
  style,
  containerStyle,
  theme,
  ...props
}) => {
  theme = useTheme(theme);
  backgroundColor = backgroundColor || theme.color.primary;
  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          padding,
        },
        elevationShadowStyle(elevation || 1),
        containerStyle,
      ]}>
      <Image
        source={source}
        style={[{width: size, height: size, borderRadius: size / 2}, style]}
        {...props}
      />
    </Animated.View>
  );
};
AvatarImage.displayName = 'Avatar.Image';
export default AvatarImage;
