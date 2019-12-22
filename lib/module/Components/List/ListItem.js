import React from 'react';
import { View, StyleSheet } from 'react-native';
import Surface from '../Core/Surface';
import Text from '../Core/Typography';
import Ripple from '../Core/Ripple';
import { useTheme } from '../../Theming';
const ListItem = ({ padding, margin = 0, left, color, title, subtitle, dense, containerStyle, titleProps, subtitleProps, type, theme, right, ...props }) => {
    theme = useTheme(theme);
    color = color || theme.color.text;
    padding = padding || [type === 'avatar' ? 8 : subtitle ? 16 : 12, 0];
    return (React.createElement(Ripple, Object.assign({}, props),
        React.createElement(Surface, { padding: padding, margin: margin, justify: "space-between", style: [{ minHeight: dense ? 60 : 72 }, containerStyle] },
            left &&
                left({
                    size: type === 'largeImage' || type === 'image'
                        ? 56
                        : type === 'avatar'
                            ? 40
                            : 24,
                    color,
                    dense,
                    containerStyle: {
                        marginLeft: type === 'largeImage' ? 0 : 16,
                        marginTop: type === 'icon' ? 16 : type === 'avatar' ? 8 : 6,
                    },
                }),
            React.createElement(View, { style: {
                    marginLeft: 16,
                    flexGrow: 1,
                    marginVertical: type === undefined ? 12 : 4,
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                } },
                React.createElement(Text, Object.assign({ variant: "subtitle1", gutterBottom: subtitle ? 2 : 0, transform: "capitalize" }, titleProps), title),
                subtitle && (React.createElement(Text, Object.assign({ variant: "subtitle2", contrast: 0.7 }, subtitleProps), subtitle))),
            right &&
                right({
                    size: 24,
                    containerStyle: { marginHorizontal: 16, marginTop: 6 },
                    color,
                    dense,
                }))));
};
const styles = StyleSheet.create({
    container: {},
});
ListItem.displayName = 'List.Item';
export default ListItem;
