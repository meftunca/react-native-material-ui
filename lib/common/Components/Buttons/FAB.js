import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Ripple from '../Core/Ripple';
import Surface from '../Core/Surface';
import { View } from 'react-native';
import Icon from '../Core/Icon';
import Color from 'color';
import { useTheme } from '../../Theming';
import Text from '../Core/Typography';

const FAB = ({
  children,
  paperProps = {
    padding: [4, 8],
    margin: 2
  },
  color = 'primary',
  label,
  style,
  dense,
  size = 24,
  iconFontFamily,
  rippleStyle,
  labelProps,
  onLayout,
  theme,
  contentContainerStyle,
  icon,
  ...props
}) => {
  const themeControl = useTheme(theme);
  let fabColor = color && color in themeControl.color ? themeControl.color[color] : color ? color : themeControl.color.primary,
      foreColor = Color(fabColor).isDark() ? 'white' : 'black';
  return React.createElement(View, {
    onLayout: onLayout,
    style: [{
      borderRadius: size * 2,
      overflow: 'hidden',
      margin: dense ? 8 : 16 //   minHeight: dense ? 32 : 60,
      //   minWidth: dense ? 32 : 60,

    }, contentContainerStyle]
  }, React.createElement(Ripple, _extends({}, props, {
    rippleContainerBorderRadius: size,
    style: [rippleStyle, {
      borderRadius: size,
      overflow: 'hidden',
      padding: 4
    }],
    rippleColor: Color(fabColor).darken(0.4).fade(0.1).toString()
  }), React.createElement(Surface, _extends({}, paperProps, {
    direction: "row",
    justify: "center",
    alignItems: "center",
    alignContent: "center",
    padding: dense ? 8 : 16,
    margin: 0,
    style: [style, {
      backgroundColor: fabColor,
      borderRadius: size * 2,
      height: dense && label ? 48 : dense ? 40 : 56,
      minWidth: dense ? 40 : 56
    }]
  }), icon !== undefined && React.createElement(Icon, {
    name: icon,
    color: foreColor,
    family: iconFontFamily,
    size: size,
    style: {
      marginRight: label ? 12 : 0
    }
  }), label !== undefined && React.createElement(Text, _extends({
    color: foreColor,
    variant: "button",
    transform: "uppercase"
  }, labelProps, {
    style: [labelProps === null || labelProps === void 0 ? void 0 : labelProps.style, {
      marginRight: 20 - (dense ? 8 : 16)
    }]
  }), label))));
};

FAB.propTypes = {
  iconFontFamily: _pt.any,
  role: _pt.oneOf(['fab', 'icon', 'button']),
  paperProps: _pt.any,
  color: _pt.oneOfType([_pt.string, _pt.oneOf(['primary', 'secondary', 'accent', 'error', 'warning', 'text'])]),
  size: _pt.number,
  onLayout: _pt.any,
  icon: _pt.string,
  label: _pt.string,
  theme: _pt.object,
  dense: _pt.bool,
  labelProps: _pt.any,
  contentContainerStyle: _pt.any,
  style: _pt.any,
  rippleStyle: _pt.any
};
export default FAB;