import React from 'react';
import { Image, Animated } from 'react-native';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import { useTheme } from '../../Theming';
const AvatarImage = ({ source, size = 32, padding, elevation, color, backgroundColor, style, containerStyle, theme, ...props }) => {
    theme = useTheme(theme);
    backgroundColor = backgroundColor || theme.color.primary;
    return (React.createElement(Animated.View, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                padding,
            },
            elevationShadowStyle(elevation || 1),
            containerStyle,
        ] },
        React.createElement(Image, Object.assign({ source: source, style: [{ width: size, height: size, borderRadius: size / 2 }, style] }, props))));
};
AvatarImage.displayName = 'Avatar.Image';
export default AvatarImage;
