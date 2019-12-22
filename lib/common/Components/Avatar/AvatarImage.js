import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Image, Animated } from 'react-native';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import { useTheme } from '../../Theming';

const AvatarImage = ({
  source,
  size = 32,
  padding,
  elevation,
  color,
  backgroundColor,
  style,
  containerStyle,
  theme,
  ...props
}) => {
  theme = useTheme(theme);
  backgroundColor = backgroundColor || theme.color.primary;
  return React.createElement(Animated.View, {
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      padding
    }, elevationShadowStyle(elevation || 1), containerStyle]
  }, React.createElement(Image, _extends({
    source: source,
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2
    }, style]
  }, props)));
};

AvatarImage.propTypes = {
  elevation: _pt.number,
  size: _pt.number,
  containerStyle: _pt.any,
  padding: _pt.number,
  color: _pt.string,
  dense: _pt.bool,
  theme: _pt.any,
  backgroundColor: _pt.string
};
AvatarImage.displayName = 'Avatar.Image';
export default AvatarImage;