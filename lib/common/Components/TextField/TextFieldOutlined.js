import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Animated, Easing, StyleSheet, Keyboard } from 'react-native';
import * as Palette from './../../Helpers/palette';
import BottomBar from './BottomHelper';

const TextFieldOutlined = ({
  defaultValue,
  label,
  value,
  error,
  success,
  warning,
  count,
  Left,
  Right,
  onChange,
  disabled,
  ripple,
  helperText,
  bottomWrapperStyle,
  clearButtonMode,
  placeholder,
  min,
  max,
  ...rest
}) => {
  const [state, setStateBase] = useState({
    active: false,
    nativeEvent: {}
  });
  const labelAnim = useRef(new Animated.Value(0)).current;

  const setState = newState => setStateBase({ ...state,
    ...newState
  });

  useEffect(() => {
    let count = value ? value.length : defaultValue ? defaultValue.length : 0;
    setState({
      nativeEvent: {
        eventCount: count,
        text: value || defaultValue
      }
    });
    count > 0 && _active();
  }, []);

  const _active = () => {
    setState({
      active: true
    });
    Animated.timing(labelAnim, {
      toValue: 1,
      easing: Easing.bezier(0.25, 0.5, 0.75, 0.1),
      duration: 200
    }).start();
  },
        _passive = () => {
    if (state.nativeEvent.eventCount > 0) return;
    setState({
      active: false
    });
    Animated.timing(labelAnim, {
      toValue: 0,
      easing: Easing.bezier(1, 0.75, 0.5, 0.25),
      duration: 200
    }).start();
  },
        _onChange = prop => {
    prop.nativeEvent.eventCount = prop.nativeEvent.text.length;
    setState({
      nativeEvent: prop.nativeEvent
    });
    if (max != undefined && prop.nativeEvent.text.length > max) return;
    onChange && onChange(prop);
  };

  let borderWidth = disabled ? 1.5 : 1,
      variantStyle = {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: borderWidth,
    paddingTop: 0
  },
      labelPosArr = [16, -10],
      labelFontSize = labelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 12]
  }),
      labelLocationTranslateY = labelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: labelPosArr
  }),
      colors = state.active ? Palette.blue500 : Palette.grey700;
  colors = error ? Palette.red500 : warning ? Palette.amber800 : success ? Palette.green500 : colors;
  let style = StyleSheet.create({
    container: {
      minHeight: 56,
      margin: 8
    },
    wrapper: {
      borderColor: colors,
      paddingHorizontal: 12
    },
    contentWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      minHeight: 56,
      minWidth: 280,
      margin: 0,
      padding: 0
    },
    label: {
      position: 'absolute',
      backgroundColor: state.active ? 'white' : 'transparent',
      // height: 18,
      paddingHorizontal: 4,
      top: 0,
      left: Left ? 40 : 12 // bottom: 6,

    },
    labelWrapper: {
      flex: 1,
      zIndex: 999,
      width: 'auto',
      padding: 3
    },
    //@action
    leftAction: {
      fontSize: 20,
      color: colors,
      marginRight: 4,
      marginLeft: 0,
      paddingTop: 14,
      paddingBottom: 4,
      marginBottom: 4
    },
    rightAction: {
      fontSize: 20,
      color: colors,
      marginLeft: 4,
      marginRight: 0,
      marginBottom: 4
    },
    fieldInput: {
      flexGrow: 1,
      height: '100%',
      fontSize: 16,
      color: Palette.grey700,
      // paddingVertical: 8,
      minHeight: 28 // backgroundColor: 'rgba(0,0,0,.1)',

    },
    bottomWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 14,
      paddingRight: 8,
      ...bottomWrapperStyle
    },
    helperWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: 6
    },
    helperText: {
      height: 16,
      color: colors,
      fontSize: 12
    }
  });
  return React.createElement(View, {
    style: style.container
  }, React.createElement(Animated.View, {
    style: [style.wrapper, variantStyle]
  }, label && React.createElement(Animated.View, {
    style: [style.label, {
      transform: [{
        translateY: labelLocationTranslateY
      }]
    }]
  }, React.createElement(View, {
    style: style.labelWrapper
  }, React.createElement(Animated.Text, {
    style: {
      color: colors,
      fontSize: labelFontSize
    }
  }, label))), React.createElement(View, {
    style: style.contentWrapper
  }, Left && React.createElement(Left, {
    style: style.leftAction
  }), React.createElement(TextInput, _extends({
    placeholderTextColor: Palette.grey700,
    placeholder: state.active ? '' : placeholder,
    style: style.fieldInput,
    onChange: _onChange,
    onFocus: _active,
    onBlur: _passive,
    clearButtonMode: clearButtonMode //  clearButtonMode={clearButtonMode || "always"}
    ,
    blurOnSubmit: true,
    onSubmitEditing: Keyboard.dismiss
  }, rest)), Right && React.createElement(Right, {
    style: style.rightAction
  }))), React.createElement(BottomBar, {
    helperText: helperText,
    success: success,
    error: error,
    warning: warning,
    count: count,
    max: max,
    bottomWrapperStyle: style.bottomWrapper,
    helperTextStyle: style.helperText,
    helperWrapperStyle: style.helperWrapper,
    eventCount: state.nativeEvent ? state.nativeEvent.eventCount : 0
  }));
};

TextFieldOutlined.propTypes = {
  defaultValue: _pt.string,
  value: _pt.string,
  label: _pt.string,
  error: _pt.bool,
  success: _pt.bool,
  warning: _pt.bool,
  count: _pt.bool,
  multiLine: _pt.bool,
  Left: _pt.any,
  Right: _pt.any,
  disabled: _pt.bool,
  ripple: _pt.bool,
  numberOfLines: _pt.number,
  helperText: _pt.string,
  bottomWrapperStyle: _pt.object,
  clearButtonMode: _pt.oneOfType([_pt.oneOf(['never']), _pt.oneOf(['while-editing']), _pt.oneOf(['unless-editing']), _pt.oneOf(['always'])]),
  placeholder: _pt.string,
  min: _pt.number,
  max: _pt.number,
  onChange: _pt.func
};
export default TextFieldOutlined;