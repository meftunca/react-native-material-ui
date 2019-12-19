import React from 'react';
import {
  Image,
  Animated,
  ImageProps,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {elevationShadowStyle} from 'Helpers/styleGenerator';
interface AvatarImageProps extends ImageProps {
  elevation?: number;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  padding?: number;
  color?: string;
  dense?: boolean;
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
  ...props
}) => {
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
        // resizeMethod="scale"
        // resizeMode="cover"
        {...props}
      />
    </Animated.View>
  );
};
AvatarImage.displayName = 'Avatar.Image';
export default AvatarImage;
