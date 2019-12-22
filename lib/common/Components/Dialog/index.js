import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, PixelRatio, StatusBar } from 'react-native';
import Surface from '../Core/Surface';
import Text from '../Core/Typography';
import BackDropModal from '../Core/BackDropModal';
const roundPixel = PixelRatio.roundToNearestPixel(1);
const DefaultSurface = {
  direction: 'column',
  justify: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  padding: [8, 16],
  margin: 0
};

const Header = ({
  children,
  left,
  right,
  title,
  fullScreen,
  subtitle,
  titleProps,
  subtitleProps,
  ...otherProps
}) => {
  return React.createElement(Surface, _extends({}, DefaultSurface, {
    padding: [16, 8, 8, fullScreen ? 16 : 24],
    margin: 4,
    direction: "row",
    alignItems: "center"
  }, otherProps), left ? left({
    style: {
      margin: 4
    },
    size: 48
  }) : React.createElement(React.Fragment, null), React.createElement(View, {
    style: {
      flex: 1,
      marginHorizontal: left ? 8 : 0,
      justifyContent: 'center'
    }
  }, title && React.createElement(React.Fragment, null, typeof title === 'string' ? React.createElement(Text, _extends({
    transform: "capitalize",
    variant: "h6",
    gutterBottom: 2,
    contrast: 0.87
  }, titleProps), title) : title), subtitle && React.createElement(React.Fragment, null, typeof subtitle === 'string' ? React.createElement(Text, _extends({
    transform: "capitalize",
    variant: "subtitle2",
    contrast: 0.6
  }, subtitleProps), subtitle) : subtitle)), right ? right({}) : React.createElement(React.Fragment, null));
};

Header.propTypes = {
  left: _pt.any,
  right: _pt.any,
  title: _pt.oneOfType([_pt.element, _pt.string]),
  subtitle: _pt.oneOfType([_pt.element, _pt.string]),
  titleProps: _pt.any,
  subtitleProps: _pt.any,
  fullScreen: _pt.bool
};

const Content = ({
  children,
  fullScreen,
  ...otherProps
}) => React.createElement(Surface, _extends({}, DefaultSurface, {
  margin: [8, 8, 8, fullScreen ? 16 : 24],
  style: {
    flex: 1
  }
}, otherProps), children);

const Actions = ({
  children,
  style,
  ...otherProps
}) => React.createElement(View, _extends({
  style: [{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8 / roundPixel
  }, style]
}, otherProps), children && React.Children.map(children, Child => {
  return React.isValidElement(Child) ? React.cloneElement(Child, {
    transform: 'uppercase',
    textProps: {
      weight: '500',
      contrast: 1
    }
  }) : Child;
}));

Header.displayName = 'Header';
Content.displayName = 'Content';
Actions.displayName = 'Actions';

const Dialog = ({
  children,
  visible,
  animationType,
  fullScreen = false,
  backdropColor = 'rgba(0,0,0,.55)',
  onClose,
  duration = 300,
  delay,
  ...otherProps
}) => {
  return React.createElement(BackDropModal, {
    visible: visible,
    fullScreen: fullScreen,
    onClose: onClose,
    duration: duration,
    delay: delay,
    backdropColor: backdropColor,
    animationType: fullScreen ? 'slide' : animationType
  }, fullScreen && React.createElement(StatusBar, {
    backgroundColor: "white",
    barStyle: "dark-content"
  }), React.createElement(Surface, _extends({
    direction: "column",
    padding: 0,
    margin: 0,
    alignItems: "flex-start",
    elevation: 0,
    style: [{
      minHeight: 110,
      justifyContent: 'space-between'
    }, fullScreen && {
      height: '100%'
    }]
  }, otherProps), children && React.Children.map(children, (Child, index) => {
    return React.isValidElement(Child) ? React.cloneElement(Child, {
      fullScreen
    }) : Child;
  })));
};

Dialog.Header = Header;
Dialog.Content = Content;
Dialog.Actions = Actions;
export default Dialog;