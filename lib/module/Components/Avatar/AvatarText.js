import React from 'react';
import { Animated } from 'react-native';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import Text from '../Core/Typography';
import Color from 'color';
import { useTheme } from '../../Theming';
const AvatarText = ({ size = 32, padding, color, backgroundColor, style, containerStyle, elevation, label, theme, textProps, ...props }) => {
    theme = useTheme(theme);
    backgroundColor = backgroundColor || theme.color.primary;
    return (React.createElement(Animated.View, Object.assign({ style: [
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
        ] }, props),
        React.createElement(Text, Object.assign({ color: Color(backgroundColor).isDark() ? 'white' : 'black', size: size / 2, weight: "500", align: "center" }, textProps), label)));
};
AvatarText.displayName = 'Avatar.Text';
export default AvatarText;
