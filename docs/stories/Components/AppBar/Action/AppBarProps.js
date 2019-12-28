import React from 'react';
import propTypes from 'prop-types';

export const AppBarProps = () => <div>deneme</div>;
export const ContentProps = () => <div>deneme</div>;
export const ActionProps = () => <div>deneme</div>;

AppBarProps.propTypes = {
  varint: propTypes.oneOf(['top', 'bottom']),
  children: propTypes.node,
  subChildren: propTypes.node,
  subChildrenProps: propTypes.object,
  color: propTypes.string,
  elevation: propTypes.bool,
  theme: propTypes.object,
};

ActionProps.propTypes = {
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

ContentProps.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  color: propTypes.string,
  subtitleProps: propTypes.object,
  titleProps: propTypes.object,
};
