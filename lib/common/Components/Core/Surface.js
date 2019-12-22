import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated } from 'react-native';
import { directionRepeat, elevationShadowStyle } from './../../Helpers/styleGenerator';
import { useTheme } from '../../Theming';

const Surface = ({
  padding = 0,
  margin = 0,
  elevation = 0,
  style,
  direction = 'row',
  justify,
  cornerRaidus = 0,
  alignContent = 'center',
  alignItems,
  overflow = 'hidden',
  children,
  theme,
  ...otherProps
}) => {
  theme = useTheme(theme);
  let paddingControl = typeof padding === 'number' || typeof padding === 'string' ? {
    padding
  } : directionRepeat('padding', padding);
  let marginControl = typeof margin === 'number' || typeof margin === 'string' ? {
    margin
  } : directionRepeat('margin', margin);
  let styleObject = {
    borderRadius: cornerRaidus,
    backgroundColor: theme.color.surface,
    flexDirection: direction,
    justifyContent: justify ? justify : React.Children.count(children) > 1 ? 'space-between' : 'center',
    alignContent,
    alignItems,
    ...paddingControl,
    ...marginControl,
    ...elevationShadowStyle(elevation)
  };
  return React.createElement(Animated.View, _extends({}, otherProps, {
    style: [styleObject, style].flat()
  }), children);
};

Surface.propTypes = {
  padding: _pt.oneOfType([_pt.arrayOf(_pt.number), _pt.arrayOf(_pt.string), _pt.number, _pt.string]),
  margin: _pt.oneOfType([_pt.arrayOf(_pt.number), _pt.arrayOf(_pt.string), _pt.number, _pt.string]),
  justify: _pt.oneOfType([_pt.oneOf(['center']), _pt.oneOf(['space-between']), _pt.oneOf(['space-around']), _pt.oneOf(['space-evenly']), _pt.oneOf(['flex-end']), _pt.oneOf(['flex-start']), _pt.oneOf(['stretch'])]),
  alignItems: _pt.oneOfType([_pt.oneOf(['center']), _pt.oneOf(['space-between']), _pt.oneOf(['space-around']), _pt.oneOf(['space-evenly']), _pt.oneOf(['flex-end']), _pt.oneOf(['flex-start']), _pt.oneOf(['stretch'])]),
  alignContent: _pt.oneOfType([_pt.oneOf(['center']), _pt.oneOf(['space-between']), _pt.oneOf(['space-around']), _pt.oneOf(['space-evenly']), _pt.oneOf(['flex-end']), _pt.oneOf(['flex-start']), _pt.oneOf(['stretch'])]),
  cornerRaidus: _pt.number,
  elevation: _pt.number,
  overflow: _pt.oneOf(['visible', 'hidden', 'scroll']),
  direction: _pt.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  theme: _pt.any
};
Surface.displayName = 'Surface';
export default Surface;