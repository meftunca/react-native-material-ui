import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, PixelRatio } from 'react-native';
import Surface from './../Core/Surface';
import Text from './../Core/Typography';
const roundPixel = PixelRatio.roundToNearestPixel(1);
const DefaultSurface = {
  direction: 'column',
  justify: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 16,
  margin: 0
};

const Header = ({
  children,
  left,
  right,
  title,
  subtitle,
  titleProps,
  subtitleProps,
  ...otherProps
}) => {
  return React.createElement(Surface, _extends({}, DefaultSurface, {
    padding: [12, 16],
    direction: "row",
    alignItems: "center"
  }, otherProps), left !== undefined ? left({
    style: {
      marginRight: 16
    },
    size: 40
  }) : React.createElement(React.Fragment, null), React.createElement(View, {
    style: {
      flex: 1,
      marginLeft: left ? 16 : 0,
      justifyContent: 'center'
    }
  }, title && React.createElement(React.Fragment, null, typeof title === 'string' ? React.createElement(Text, _extends({
    transform: "capitalize",
    variant: "h6",
    contrast: 0.7,
    gutterBottom: 4
  }, titleProps), title) : title), subtitle && React.createElement(React.Fragment, null, typeof subtitle === 'string' ? React.createElement(Text, _extends({
    transform: "capitalize",
    variant: "subtitle2",
    contrast: 0.5
  }, subtitleProps), subtitle) : subtitle)), right !== undefined ? right({}) : React.createElement(React.Fragment, null));
};

Header.propTypes = {
  left: _pt.any,
  right: _pt.any,
  title: _pt.oneOfType([_pt.element, _pt.string]),
  subtitle: _pt.oneOfType([_pt.element, _pt.string]),
  titleProps: _pt.any,
  subtitleProps: _pt.any
};

const Content = ({
  children,
  ...otherProps
}) => React.createElement(Surface, _extends({}, DefaultSurface, otherProps), children);

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
    paddingHorizontal: 8,
    marginBottom: 8
  }, style]
}, otherProps), children);

Header.displayName = 'Header';
Content.displayName = 'Content';
Actions.displayName = 'Actions';

const Card = ({
  children,
  theme,
  ...otherProps
}) => React.createElement(Surface, _extends({
  theme: theme,
  direction: "column",
  padding: 0,
  margin: 0,
  alignItems: "flex-start",
  elevation: 2
}, otherProps), Array.isArray(children) ? React.Children.map(children, Child => {
  return React.isValidElement(Child) ? React.cloneElement(Child, {}) : Child;
}) : children);

Card.Header = Header;
Card.Content = Content;
Card.Actions = Actions;
export default Card;