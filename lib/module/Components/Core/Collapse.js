import React, { useRef, useEffect, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { useLayout } from '../../Helpers/Hooks';
const Collapse = ({ expanded = false, delay = 0, duration = 50, children, easyFunc, type = 'position', ...rest }) => {
    const collapse = useRef(new Animated.Value(expanded ? 1 : 0)).current;
    const [mount, setMount] = useState(false);
    const contentLayout = useLayout();
    useEffect(() => {
        setTimeout(() => {
            setMount(true);
        }, duration);
    }, []);
    useEffect(() => {
        if (mount)
            Animated.timing(collapse, {
                toValue: expanded === true ? 1 : 0,
                easing: easyFunc || Easing.inOut(Easing.cubic),
                duration,
                delay,
            }).start();
    }, [expanded]);
    const interpolateHeight = collapse.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentLayout.height],
    }), interpolatePosition = collapse.interpolate({
        inputRange: [0, 1],
        outputRange: [-contentLayout.height, 0],
    });
    return (React.createElement(View, { collapsable: true, accessibilityRole: "adjustable", accessibilityLiveRegion: "polite", accessibilityLabel: "collapasbleView", accessibilityTraits: "frequentUpdates", accessible: true, pointerEvents: !expanded ? 'none' : 'auto', style: {
            width: '100%',
            overflow: 'hidden',
            flexDirection: 'column',
            alignSelf: 'flex-start',
        } },
        React.createElement(Animated.View, Object.assign({}, rest, { style: [
                type === 'position'
                    ? {
                        marginTop: interpolatePosition,
                    }
                    : {
                        height: interpolateHeight,
                    },
            ] }),
            React.createElement(View, { onLayout: contentLayout.onLayout }, children))));
};
export default Collapse;
