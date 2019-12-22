import React, { useRef, useEffect } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { blue200 } from '../../Helpers/palette';

const PaginationItem = ({
  active
}) => {
  const animate = useRef(new Animated.Value(active ? 6 : 0)).current;
  useEffect(() => {
    setWidth(active ? 6 : 0);
  }, [active]);

  const setWidth = val => {
    Animated.timing(animate, {
      toValue: val,
      duration: 150,
      easing: Easing.linear //    useNativeDriver: true

    }).start();
  };

  const animateStyle = StyleSheet.flatten({
    animate: {
      paddingHorizontal: animate,
      backgroundColor: animate.interpolate({
        inputRange: [0, 1],
        outputRange: ['#ffffff', blue200]
      })
    }
  });
  return React.createElement(Animated.View, {
    style: [style.pagination, animateStyle.animate]
  });
};

const style = StyleSheet.create({
  pagination: {
    height: 8,
    width: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: '#f7f7f7'
  }
});
export default PaginationItem;