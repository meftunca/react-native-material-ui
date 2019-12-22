import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Action from './Action';
import Content from './Content';
import Color from 'color';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from '../../Theming';
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const AppBar = ({ varint, children, subChildren, subChildrenProps, color, elevation = 2, theme, }) => {
    theme = useTheme(theme);
    color = color || theme.color.primary;
    // color = color
    //   ? color
    //   : secondary
    //   ? context.colors.primary
    //   : context.colors.primary;
    const childrens = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            color: Color(color).isDark() ? 'white' : '#333',
        });
    });
    const style = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 8,
            minHeight: 56,
            backgroundColor: color,
            margin: 0,
        },
        root: {
            justifyContent: 'flex-start',
        },
    });
    return (React.createElement(AnimatedSafeAreaView, { style: [style.root, elevationShadowStyle(elevation)] },
        React.createElement(Animated.View, { style: [style.container] }, childrens),
        subChildren && varint === 'top' && (React.createElement(View, { style: [
                {
                    backgroundColor: color,
                    minHeight: 100,
                    justifyContent: 'center',
                    paddingLeft: 60,
                },
            ] },
            React.createElement(View, Object.assign({ style: { marginLeft: 24, marginRight: 16 } }, subChildrenProps), subChildren())))));
};
const Grow = () => React.createElement(View, { style: { flexGrow: 1 } });
Grow.displayName = 'Grow';
AppBar.Grow = Grow;
AppBar.Content = Content;
AppBar.Action = Action;
// AppBar.displayName = Grow;
// AppBar.displayName = Content;
// AppBar.displayName = Action;
export default AppBar;
