import React from 'react';
import { Animated } from 'react-native';
import { directionRepeat, elevationShadowStyle, } from './../../Helpers/styleGenerator';
import { useTheme } from '../../Theming';
const Surface = ({ padding = 0, margin = 0, elevation = 0, style, direction = 'row', justify, cornerRaidus = 0, alignContent = 'center', alignItems, overflow = 'hidden', children, theme, ...otherProps }) => {
    theme = useTheme(theme);
    let paddingControl = typeof padding === 'number' || typeof padding === 'string'
        ? { padding }
        : directionRepeat('padding', padding);
    let marginControl = typeof margin === 'number' || typeof margin === 'string'
        ? { margin }
        : directionRepeat('margin', margin);
    let styleObject = {
        borderRadius: cornerRaidus,
        backgroundColor: theme.color.surface,
        flexDirection: direction,
        justifyContent: justify
            ? justify
            : React.Children.count(children) > 1
                ? 'space-between'
                : 'center',
        alignContent,
        alignItems,
        ...paddingControl,
        ...marginControl,
        ...elevationShadowStyle(elevation),
    };
    return (React.createElement(Animated.View, Object.assign({}, otherProps, { style: [styleObject, style].flat() }), children));
};
Surface.displayName = 'Surface';
export default Surface;
