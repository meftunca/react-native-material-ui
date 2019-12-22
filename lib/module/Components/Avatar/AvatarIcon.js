import React from 'react';
import { Animated } from 'react-native';
import Icon from '../Core/Icon';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import Color from 'color';
import { useTheme } from '../../Theming';
const AvatarIcon = ({ icon, size = 32, padding, color, iconFontFamily = 'materialCommunity', backgroundColor, style, containerStyle, elevation, theme, ...props }) => {
    theme = useTheme(theme);
    backgroundColor = backgroundColor || theme.color.primary;
    return (React.createElement(Animated.View, Object.assign({}, props, { style: [
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
        ] }),
        React.createElement(Icon, { name: icon, size: (size * 2) / 3, color: Color(backgroundColor).isDark() && typeof color !== 'string'
                ? 'white'
                : color !== 'string'
                    ? 'black'
                    : color, family: iconFontFamily })));
};
AvatarIcon.displayName = 'Avatar.Icon';
export default AvatarIcon;
