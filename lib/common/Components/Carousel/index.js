function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import ScaledImage from './ScaledImage';
import PaginationItem from './PaginationItem';
import { blue500 } from '../../Helpers/palette';
import Ripple from '../Core/Ripple';
import { useDimensions } from '../../Helpers/Hooks';

const Carousel = ({
  imgData
}) => {
  const {
    width
  } = useDimensions().window;
  const [active, setState] = useState(0);

  const _scroller = useRef(null);

  const to = active => {
    var _scroller$current;

    setState(active);
    console.log(' _scroller.current ', _scroller.current); // _scroller.current &&

    (_scroller$current = _scroller.current) === null || _scroller$current === void 0 ? void 0 : _scroller$current._component.scrollResponderScrollTo({
      x: Dimensions.get('window').width * active,
      y: 0,
      duration: 400,
      animated: true
    });
  };

  return React.createElement(View, null, React.createElement(Animated.ScrollView, {
    ref: _scroller,
    horizontal: true,
    alwaysBounceVertical: false,
    bounces: false,
    showsHorizontalScrollIndicator: false,
    disableScrollViewPanResponder: true,
    pagingEnabled: true,
    scrollEnabled: true,
    onMomentumScrollEnd: ({
      nativeEvent
    }) => {
      let index = Number(Number(nativeEvent.contentOffset.x / width).toFixed(0));
      setState(index);
    },
    contentContainerStyle: {
      width: width * imgData.length,
      flexDirection: 'row',
      padding: 0
    }
  }, imgData.map((i, k) => React.createElement(ScaledImage, _extends({}, i, {
    key: k
  })))), React.createElement(View, {
    style: style.paginationWrapper
  }, new Array(imgData.length).fill('').map((i, k) => React.createElement(Ripple, {
    onPress: () => to(k),
    key: i || k
  }, React.createElement(PaginationItem, {
    color: blue500,
    active: active == k
  })))));
};

export const style = StyleSheet.create({
  paginationWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20
  }
});
export default Carousel;