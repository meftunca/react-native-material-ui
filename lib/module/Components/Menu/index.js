import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, Easing, Modal, TouchableWithoutFeedback, StyleSheet, UIManager, } from 'react-native';
import { useDimensions, useLayout, useAnimation } from './../../Helpers/Hooks';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import Ripple from '../Core/Ripple';
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
const Menu = ({ trigger, render = () => null, minWidth, elevation = 2, corderRadius = 4, duration = 150, delay = 1, }) => {
    const contentLayout = useLayout();
    const [size, setSize] = useState({
        oy: 0,
        ox: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    const { width, height } = useDimensions().window;
    const [open, setOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const triggerRef = useRef(null);
    const fade = useAnimation({
        type: 'timing',
        toValue: open ? 1 : 0,
        duration,
        delay,
        easing: open === false
            ? Easing.bezier(0, 0.4, 0.7, 1)
            : Easing.bezier(1, 0.7, 0.4, 0),
    });
    useEffect(() => {
        if (triggerRef.current.measure)
            triggerRef.current.measure((ox, oy, width, height, px, py) => {
                setSize({ ...size, ox, oy, x: px, y: py, width, height });
            });
    }, [modalVisible]);
    useEffect(() => {
        return () => {
            setModalVisible(false);
            setOpen(false);
        };
    }, []);
    useEffect(() => {
        if (open === true)
            setModalVisible(true);
        else
            setTimeout(() => {
                setModalVisible(open);
            }, duration);
    }, [open]);
    let isTop = contentLayout.height + size.y >= height / 2, isLeft = contentLayout.width + size.x >= width, top = isTop ? size.y - contentLayout.height - 8 : size.y - 8, left = isLeft ? width - contentLayout.width - size.width - 12 : size.x - 12, minWidthCalculate = size.width < (minWidth || contentLayout.width)
        ? minWidth || contentLayout.width
        : size.width;
    return (React.createElement(React.Fragment, null,
        trigger && (React.createElement(Ripple, Object.assign({}, {
            buttonRef: triggerRef,
            onPress: () => {
                setOpen(true);
            },
        }), trigger)),
        React.createElement(Modal, { visible: modalVisible, animationType: "none", transparent: true, onDismiss: () => setOpen(false), supportedOrientations: [
                'landscape',
                'landscape-left',
                'landscape-right',
                'portrait',
                'portrait-upside-down',
            ], onRequestClose: () => setOpen(false) },
            React.createElement(TouchableWithoutFeedback, { style: [StyleSheet.absoluteFillObject], onPress: () => setOpen(false) },
                React.createElement(View, { style: {
                        // backgroundColor: 'black',
                        // opacity: 0.2,
                        width: '100%',
                        height: '100%',
                    } })),
            React.createElement(View, { pointerEvents: open ? 'auto' : 'none', accessibilityViewIsModal: true, accessibilityLiveRegion: "polite", style: {
                    position: 'absolute',
                    flexDirection: 'row-reverse',
                    top,
                    left,
                    width: contentLayout.width,
                    height: contentLayout.height,
                } },
                React.createElement(Animated.View, { style: {
                        flex: 1,
                        overflow: 'hidden',
                        alignSelf: 'flex-start',
                        minWidth: minWidthCalculate,
                        minHeight: contentLayout.height || 50,
                    } },
                    React.createElement(Animated.View, { onLayout: contentLayout.onLayout, collapsable: true, style: {
                            margin: elevation,
                            ...elevationShadowStyle(elevation),
                            backgroundColor: 'white',
                            transform: [
                                {
                                    translateX: fade.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [
                                            (isLeft === false ? -1 : 1) * contentLayout.width +
                                                size.width,
                                            0,
                                        ],
                                    }),
                                },
                                {
                                    translateY: fade.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [
                                            (isTop === false ? -1 : 1) * contentLayout.height +
                                                size.height,
                                            0,
                                        ],
                                    }),
                                },
                            ],
                            borderRadius: corderRadius,
                        } }, render({
                        onDismiss: () => {
                            setTimeout(() => {
                                setOpen(false);
                            }, 200);
                        },
                    })))))));
};
export default Menu;
