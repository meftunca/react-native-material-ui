import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View } from 'react-native';
import Text from '../Core/Typography';

const Content = ({
  primary,
  secondary,
  color,
  secondaryProps,
  primaryProps,
  ...titleProps
}) => {
  return React.createElement(View, {
    style: {
      marginHorizontal: 16,
      marginVertical: 4,
      flexGrow: 1
    }
  }, React.createElement(Text, _extends({
    variant: "h6",
    paddingDisable: true,
    numberOfLines: 1,
    gutterBottom: 4,
    dense: true,
    color: color
  }, primaryProps, titleProps), primary), secondary && React.createElement(Text, _extends({
    variant: "subtitle2",
    dense: true,
    numberOfLines: 1,
    color: color
  }, secondaryProps, titleProps), secondary));
};

Content.propTypes = {
  primary: _pt.string,
  secondary: _pt.string,
  color: _pt.string,
  secondaryProps: _pt.any,
  primaryProps: _pt.any
};
Content.displayName = 'Content';
export default Content;