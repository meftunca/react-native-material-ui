import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated } from 'react-native';
import { elevationShadowStyle } from '../../Helpers/styleGenerator';
import Text from '../Core/Typography';
import Color from 'color';
import { useTheme } from '../../Theming';

const AvatarText = ({
  size = 32,
  padding,
  color,
  backgroundColor,
  style,
  containerStyle,
  elevation,
  label,
  theme,
  textProps,
  ...props
}) => {
  theme = useTheme(theme);
  backgroundColor = backgroundColor || theme.color.primary;
  return React.createElement(Animated.View, _extends({
    style: [{
      width: size + 8,
      height: size + 8,
      borderRadius: size,
      backgroundColor,
      padding,
      alignItems: 'center',
      justifyContent: 'center'
    }, elevationShadowStyle(elevation || 1), containerStyle]
  }, props), React.createElement(Text, _extends({
    color: Color(backgroundColor).isDark() ? 'white' : 'black',
    size: size / 2,
    weight: "500",
    align: "center"
  }, textProps), label));
};

AvatarText.propTypes = {
  elevation: _pt.number,
  size: _pt.number,
  style: _pt.any,
  containerStyle: _pt.any,
  padding: _pt.number,
  color: _pt.string,
  backgroundColor: _pt.string,
  label: _pt.string,
  theme: _pt.any,
  textProps: _pt.any
};
AvatarText.displayName = 'Avatar.Text';
export default AvatarText;