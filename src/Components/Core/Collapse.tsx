import React, {useRef, useEffect, useState} from 'react';
import {Animated, Easing, View} from 'react-native';

interface CollapseProps {
  expanded?: boolean;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
  type?: 'position' | 'height';
  easyFunc?: (value: number) => number;
}
const Collapse: React.FC<CollapseProps> = ({
  expanded = false,
  delay = 0,
  duration = 300,
  children,
  easyFunc = Easing.linear,
  type = 'position',
  ...rest
}) => {
  const collapse = useRef(new Animated.Value(expanded ? 100 : 0)).current;
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, duration);
  }, []);
  useEffect(() => {
    if (mount)
      Animated.timing(collapse, {
        toValue: expanded === true ? 100 : 0,
        easing: easyFunc,
        // easyFunc || !expanded
        //   ? Easing.bezier(0, 0.4, 0.7, 1)
        //   : Easing.bezier(1, 0.7, 0.4, 0),
        duration: duration,
        delay: delay,
      }).start();
  }, [expanded]);
  const interpolateHeight = collapse.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }),
    interpolatePosition = collapse.interpolate({
      inputRange: [0, 100],
      outputRange: ['-100%', '0%'],
    });
  return (
    <View
      collapsable
      accessibilityRole="adjustable"
      accessibilityLiveRegion="polite"
      accessibilityLabel="collapasbleView"
      accessibilityTraits="frequentUpdates"
      accessible
      pointerEvents={!expanded ? 'none' : 'auto'}
      style={{
        width: '100%',
        overflow: 'hidden',
        flexDirection: 'column',
        alignSelf: 'flex-start',
      }}>
      <Animated.View
        {...rest}
        style={[
          type === 'position'
            ? {
                marginTop: interpolatePosition,
              }
            : {
                minHeght: 0,

                maxHeight: interpolateHeight,
              },
        ]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default Collapse;
