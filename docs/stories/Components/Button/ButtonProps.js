import React, {useState, useEffect} from 'react';
// import {Button as BtnBase/} from '@devloops/react-native-variant';
import propTypes from 'prop-types';
export default {
  title: 'deneme',
};
export const Button = () => <div>deneme</div>;
Button.defaultProps = {
  variant: 'text',
  cornerRadius: 4,
  iconFontFamily: 'materialCommunity',
  elevation: 2,
  paperProps: {padding: [0, 8], margin: 2},
  role: 'button',
  size: 20,
  type: 'button',
  dense: false,
  fullWidth: false,
  transform: 'capitalize',
};
Button.propTypes = {
  iconFontFamily: propTypes.oneOf([
    'material',
    'materialCommunity',
    'simpleLine',
    'fa',
    'fa5',
    'fa5pro',
    'foundation',
    'evil',
    'octicons',
    'ionic',
    'feather',
    'entypo',
    'zocial',
  ]),
  /**
   * Using a variant for the use of the button
   */
  variant: propTypes.oneOf(['text', 'outlined', 'contained']),

  /**
   * Using a type for the use of the button
   */
  type: propTypes.oneOf(['button', 'drawer', 'dialog']),
  /**
   * Using a role for the use of the button
   */
  role: propTypes.oneOf(['fab', 'icon', 'button']),
  paperProps: propTypes.object,
  color: propTypes.oneOfType([
    propTypes.string,
    propTypes.oneOf(['primary']),
    propTypes.oneOf(['secondary']),
    propTypes.oneOf(['accent']),
    propTypes.oneOf(['error']),
    propTypes.oneOf(['warning']),
    propTypes.oneOf(['text']),
  ]),
  cornerRadius: propTypes.number,
  elevation: propTypes.number,
  size: propTypes.number,
  dense: propTypes.bool,
  fullWidth: propTypes.bool,
  onLayout: propTypes.object,

  /* bu kısımı sonrada düzenle*/
  textProps: propTypes.object,
  transform: propTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
  icon: propTypes.string,
  theme: propTypes.object,
  containerStyle: propTypes.object,
  style: propTypes.object,
  rippleStyle: propTypes.object,
  buttonRef: propTypes.any,
};
