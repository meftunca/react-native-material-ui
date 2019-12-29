import React, {useRef, useEffect, useState} from 'react';
import {Animated, Easing, View} from 'react-native';
import {useLayout, useAnimation} from '../../Helpers/Hooks';

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
  duration = 50,
  children,
  easyFunc,
  type = 'position',
  ...rest
}) => {
  const collapse = useAnimation({
    type: 'timing',
    toValue: expanded ? 1 : 0,
    initialValue: 0,
    easing: easyFunc || Easing.inOut(Easing.cubic),
    duration,
    delay,
  });
  const contentLayout = useLayout();
  console.log('contentLayout.height', contentLayout.height);
  const interpolateHeight = collapse.interpolate({
      inputRange: [0, 1],
      outputRange: [0, contentLayout.height],
    }),
    interpolatePosition = collapse.interpolate({
      inputRange: [0, 1],
      outputRange: [
        contentLayout.height < 5 ? -1000 : -contentLayout.height,
        0,
      ],
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
                height: interpolateHeight,
              },
        ]}>
        <View onLayout={contentLayout.onLayout}>{children}</View>
      </Animated.View>
    </View>
  );
};

export default Collapse;
