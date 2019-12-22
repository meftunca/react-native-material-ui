import React from 'react';
import Ripple from '../Core/Ripple';
import Surface from '../Core/Surface';
import { View } from 'react-native';
import Icon from '../Core/Icon';
import Color from 'color';
import { useTheme } from '../../Theming';
import Text from '../Core/Typography';
const FAB = ({ children, paperProps = { padding: [4, 8], margin: 2 }, color = 'primary', label, style, dense, size = 24, iconFontFamily, rippleStyle, labelProps, onLayout, theme, contentContainerStyle, icon, ...props }) => {
    const themeControl = useTheme(theme);
    let fabColor = color && color in themeControl.color
        ? themeControl.color[color]
        : color
            ? color
            : themeControl.color.primary, foreColor = Color(fabColor).isDark() ? 'white' : 'black';
    return (React.createElement(View, { onLayout: onLayout, style: [
            {
                borderRadius: size * 2,
                overflow: 'hidden',
                margin: dense ? 8 : 16,
            },
            contentContainerStyle,
        ] },
        React.createElement(Ripple, Object.assign({}, props, { rippleContainerBorderRadius: size, style: [
                rippleStyle,
                {
                    borderRadius: size,
                    overflow: 'hidden',
                    padding: 4,
                },
            ], rippleColor: Color(fabColor)
                .darken(0.4)
                .fade(0.1)
                .toString() }),
            React.createElement(Surface, Object.assign({}, paperProps, { direction: "row", justify: "center", alignItems: "center", alignContent: "center", padding: dense ? 8 : 16, margin: 0, style: [
                    style,
                    {
                        backgroundColor: fabColor,
                        borderRadius: size * 2,
                        height: dense && label ? 48 : dense ? 40 : 56,
                        minWidth: dense ? 40 : 56,
                    },
                ] }),
                icon !== undefined && (React.createElement(Icon, { name: icon, color: foreColor, family: iconFontFamily, size: size, style: {
                        marginRight: label ? 12 : 0,
                    } })),
                label !== undefined && (React.createElement(Text, Object.assign({ color: foreColor, variant: "button", transform: "uppercase" }, labelProps, { style: [
                        labelProps?.style,
                        {
                            marginRight: 20 - (dense ? 8 : 16),
                        },
                    ] }), label))))));
};
export default FAB;
