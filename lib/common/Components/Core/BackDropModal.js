import _pt from "prop-types";
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Animated, Easing } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useAnimation, useDimensions } from '../../Helpers/Hooks';
const SafeAreaViewAnimated = Animated.createAnimatedComponent(SafeAreaView);

const BackDropModal = ({
  onClose,
  children,
  animationType,
  duration = 400,
  delay,
  visible = false,
  fullScreen = false,
  backdropColor = 'transparent'
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const windowHeight = useDimensions().window.height;
  const animation = useAnimation({
    type: 'timing',
    toValue: visible ? 1 : 0,
    initialValue: visible ? 1 : 0,
    easing: Easing.ease,
    duration,
    delay
  });
  useEffect(() => {
    return () => onClose && onClose();
  }, []);
  useEffect(() => {
    if (visible === true) setModalVisible(true);else if (backdropColor === 'transparent') setModalVisible(visible);else setTimeout(() => {
      setModalVisible(visible);
    }, 1200);
  }, [visible]);
  return React.createElement(Modal, {
    transparent: true,
    supportedOrientations: ['landscape', 'landscape-left', 'landscape-right', 'portrait', 'portrait-upside-down'],
    animated: false,
    hardwareAccelerated: true,
    animationType: "none",
    visible: modalVisible,
    onDismiss: onClose,
    onRequestClose: onClose
  }, React.createElement(Animated.View, {
    pointerEvents: visible ? 'auto' : 'none',
    accessibilityViewIsModal: true,
    accessibilityLiveRegion: "polite",
    style: [StyleSheet.absoluteFill]
  }, React.createElement(TouchableWithoutFeedback, {
    style: {
      zIndex: 0
    },
    onPress: onClose
  }, React.createElement(Animated.View, {
    style: {
      flex: 1,
      backgroundColor: animationType === 'slide' ? 'transparent' : backdropColor,
      opacity: animation
    }
  })), React.createElement(SafeAreaViewAnimated, {
    forceInset: {
      top: 'always',
      bottom: 'always'
    },
    style: [fullScreen === true && {
      backgroundColor: 'white'
    }, { ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flexGrow: 1,
      flexShrink: 1,
      // backgroundColor: 'red',
      zIndex: 999
    }, fullScreen && {
      flex: 1,
      height: '100%'
    }, animationType === 'slide' ? {
      top: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [windowHeight, 0]
      })
    } : animationType === 'fade' ? {
      opacity: animation
    } : {}],
    pointerEvents: "box-none"
  }, React.createElement(KeyboardAvoidingView, {
    behavior: "height",
    style: [{
      width: fullScreen ? '100%' : '80%',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignSelf: 'center'
    }]
  }, children))));
};

BackDropModal.propTypes = {
  visible: _pt.bool,
  fullScreen: _pt.bool,
  backdropColor: _pt.string,
  duration: _pt.number,
  delay: _pt.number,
  animationType: _pt.oneOf(['fade', 'slide', 'none']),
  onClose: _pt.func,
  children: _pt.node
};
export default BackDropModal;