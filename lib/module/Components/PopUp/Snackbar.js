import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Surface from '../Core/Surface';
import Text from '../Core/Typography';
import { useTheme } from '../../Theming';
import Button from '../Buttons/Button';
import Color from 'color';
import { useAnimation } from '../../Helpers/Hooks';
const Snackbar = ({ style, label, color, backgroundColor, elevation, isOpen, action, onDismiss, }) => {
    const { roundness, dark, color: colors } = useTheme();
    const opacity = useAnimation({
        type: 'timing',
        toValue: isOpen ? 1 : 0,
        initialValue: 0,
        duration: 200,
        delay: 0,
    });
    React.useEffect(() => {
        if (isOpen === true) {
            setTimeout(onDismiss, 3000);
        }
    }, [isOpen]);
    return (React.createElement(SafeAreaView, { pointerEvents: "box-none", style: styles.wrapper },
        React.createElement(Surface, { pointerEvents: "box-none", accessibilityLiveRegion: "polite", alignContent: "center", alignItems: "center", direction: "row", margin: 8, cornerRaidus: roundness, style: [
                {
                    minHeight: 48,
                    opacity: opacity,
                    elevation,
                    transform: [
                        {
                            scale: opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.7, 1],
                            }),
                        },
                    ],
                    backgroundColor: backgroundColor || Color(colors.text).isDark()
                        ? Color(colors.text)
                            .lighten(0.7)
                            .toString()
                        : Color(colors.text)
                            .darken(0.8)
                            .toString(),
                },
                style,
            ] },
            React.createElement(Text, { style: [
                    styles.content,
                    {
                        marginRight: action ? 0 : 16,
                        color: color || dark ? colors.text : colors.surface,
                    },
                ] }, label),
            action ? (React.createElement(Button, { accessibilityLabel: action.accessibilityLabel, onPress: () => {
                    action.onPress();
                    onDismiss();
                }, containerStyle: { padding: 0 }, style: styles.button, color: colors.primary, variant: "text" }, action.label)) : null)));
};
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    content: {
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 16,
        flexWrap: 'wrap',
        flex: 1,
    },
    button: {
        margin: 6,
    },
});
export default Snackbar;
