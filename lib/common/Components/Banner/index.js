import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { useAnimation, useLayout } from '../../Helpers/Hooks';
import Text from './../Core/Typography';
import Button from '../Buttons/Button';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';

const BannerWrapper = ({
  visible,
  actions,
  contentTextProps,
  contentText,
  duration = 300,
  delay = 0
}) => {
  const {
    onLayout,
    height
  } = useLayout();
  const [mount, setMount] = useState(false);
  const animatedValue = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: visible ? 1 : 0,
    easing: visible ? Easing.bezier(0.2, 0.45, 0.78, 1) : Easing.bezier(1, 0.65, 0.3, 0.1),
    duration,
    delay // useNativeDriver: true,

  });
  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, duration);
  }, []);
  const translateEffect = mount === false ? -height || -400 : animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0]
  }),
        marginBottom = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10]
  });
  return React.createElement(View, {
    style: {
      overflow: 'hidden'
    }
  }, React.createElement(Animated.View, {
    onLayout: onLayout,
    style: [styles.wrapper, {
      marginTop: translateEffect,
      backgroundColor: 'white',
      marginBottom,
      ...elevationShadowStyle(visible ? 2 : 0)
    }]
  }, React.createElement(View, {
    style: styles.textContent
  }, React.createElement(View, {
    style: {
      maxWidth: '95%'
    }
  }, React.createElement(Text, _extends({
    variant: "body2"
  }, contentTextProps), contentText)), !Array.isArray(actions) && React.createElement(Button, _extends({
    style: styles.actions
  }, actions), actions === null || actions === void 0 ? void 0 : actions.label)), Array.isArray(actions) && React.createElement(View, {
    style: styles.actionsContainer
  }, actions === null || actions === void 0 ? void 0 : actions.map(({
    label,
    style,
    ...otherProps
  }, key) => React.createElement(Button, _extends({
    style: [styles.actions, style]
  }, otherProps, {
    key: key
  }), label)))));
};

BannerWrapper.propTypes = {
  visible: _pt.bool,
  actions: _pt.oneOfType([_pt.oneOfType([_pt.any, _pt.shape({
    label: _pt.string.isRequired
  })]), _pt.arrayOf(_pt.oneOfType([_pt.any, _pt.shape({
    label: _pt.string.isRequired
  })]))]),
  contentText: _pt.string,
  contentTextProps: _pt.any,
  duration: _pt.number,
  delay: _pt.number
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 16,
    paddingBottom: 8,
    elevation: 2,
    minHeight: 54,
    flexGrow: 1
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center' // marginBottom: 12,

  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  actions: {
    marginLeft: 8
  }
});
export default BannerWrapper;