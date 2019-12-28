import React, {useState, useEffect} from 'react';
// import {Button as BtnBase/} from '@devloops/react-native-variant';
import propTypes from 'prop-types';

export const Button = () => <div>deneme</div>;
Button.defaultProps = {
  elevation: 2,
  iconFontFamily: 'materialCommunity',
  paperProps: {padding: [0, 8], margin: 2},
  role: 'icon',
  color: 'primary',
  backgroundColor: 'transparent',
  size: 24,
};
/**
 *   iconFontFamily?: IconFontFamily;
  role?: 'icon' | 'chip';
  paperProps?: SurfaceProps;
  color?:
    | string
    | ('primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'text');
  backgroundColor?: string;
  size?: number;
  icon?: string;
  theme?: object;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
 */
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
   * Using a role for the use of the button
   */
  role: propTypes.oneOf(['icon', 'chip']),
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
  elevation: propTypes.number,
  size: propTypes.number,
  onLayout: propTypes.object,

  /* bu kısımı sonrada düzenle*/
  icon: propTypes.string,
  theme: propTypes.object,
  containerStyle: propTypes.object,
  style: propTypes.object,
  rippleStyle: propTypes.object,
  buttonRef: propTypes.any,
};
