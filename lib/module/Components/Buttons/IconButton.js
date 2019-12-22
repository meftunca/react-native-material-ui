import React from 'react';
import Ripple from './../Core/Ripple';
import { View } from 'react-native';
import Icon from '../Core/Icon';
import { useTheme } from '../../Theming';
const IconButton = ({ children, color = 'text', role = 'button', style, size = 24, iconFontFamily, backgroundColor, rippleStyle, theme, containerStyle, icon, ...props }) => {
    const themeControl = useTheme(theme);
    const textColor = color && color in themeControl.color
        ? themeControl.color[color]
        : color
            ? color
            : themeControl.color.primary;
    return (React.createElement(View, { pointerEvents: "auto", style: [
            {
                borderRadius: size * 2,
                minHeight: size + (role === 'chip' ? 4 : 8),
                minWidth: size + (role === 'chip' ? 4 : 8),
            },
            containerStyle,
        ] },
        React.createElement(Ripple, Object.assign({}, props, { rippleContainerBorderRadius: size, style: [
                rippleStyle,
                {
                    backgroundColor,
                    borderRadius: size * 2,
                },
            ], rippleColor: textColor }), icon !== undefined && (React.createElement(Icon, { name: icon, color: textColor, family: iconFontFamily, size: size, style: { margin: role === 'chip' ? 2 : 8, width: size, height: size } })))));
};
export default IconButton;
