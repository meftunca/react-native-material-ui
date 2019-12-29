import React, {useState, useEffect} from 'react';
// import {List as BtnBase/} from '@devloops/react-native-variant';
import propTypes from 'prop-types';

export const List = () => <div>deneme</div>;
List.defaultProps = {};

List.propTypes = {
  /** Style Object */
  containerStyle: propTypes.object,
  left: propTypes.func,
  right: propTypes.func,
  padding: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.number),
    propTypes.arrayOf(propTypes.string),
    propTypes.number,
    propTypes.string,
  ]),
  type: propTypes.oneOfType([
    propTypes.oneOf(['largeImage']),
    propTypes.oneOf(['image']),
    propTypes.oneOf(['avatar']),
    propTypes.oneOf(['radio']),
    propTypes.oneOf(['checkbox']),
    propTypes.oneOf(['icon']),
  ]),
  margin: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.number),
    propTypes.arrayOf(propTypes.string),
    propTypes.number,
    propTypes.string,
  ]),
  color: propTypes.string,
  dense: propTypes.bool,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  titleProps: propTypes.object,
  subtitleProps: propTypes.object,
  theme: propTypes.object,
};
