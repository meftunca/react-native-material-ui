import React from 'react';
import {View, Animated, StyleProp, ViewStyle, ImageStyle} from 'react-native';
import {elevationShadowStyle} from 'Helpers/styleGenerator';
import Text, {TextProps} from 'Components/Core/Typography';
import Color from 'color';
interface AvatarTextProps {
  elevation?: number;
  size?: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  padding?: number;
  color?: string;
  backgroundColor?: string;
  label?: string;
  textProps?: TextProps;
}
const AvatarText: React.FC<AvatarTextProps> = ({
  size = 32,
  padding,
  color,
  backgroundColor,
  style,
  containerStyle,
  elevation,
  label,
  textProps,
  ...props
}) => {
  return (
    <Animated.View
      style={[
        {
          width: size + 8,
          height: size + 8,
          borderRadius: size,
          backgroundColor,
          padding,
          alignItems: 'center',
          justifyContent: 'center',
        },
        elevationShadowStyle(elevation || 1),
        containerStyle,
      ]}
      {...props}>
      <Text
        color={Color(backgroundColor).isDark() ? 'white' : 'black'}
        fontSize={size / 2}
        weight="500"
        align="center"
        {...textProps}>
        {label}
      </Text>
    </Animated.View>
  );
};
AvatarText.displayName = 'Avatar.Text';
export default AvatarText;
