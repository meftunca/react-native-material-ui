import React from 'react';
import propTypes from 'prop-types';

export const AvatarIconProps = () => <div>deneme</div>;

AvatarIconProps.defaultProps = {
  size: 32,
  elevation: 0,
  iconFontFamily: 'materialCommunity',
};

AvatarIconProps.propTypes = {
  elevation: propTypes.number,
  size: propTypes.number,
  style: propTypes.object,
  containerStyle: propTypes.object,
  padding: propTypes.number,
  color: propTypes.string,
  icon: propTypes.string.isRequired,
  backgroundColor: propTypes.string,
  theme: propTypes.object,
  iconFontFamily: propTypes.oneOf([
    'materialCommunity',
    'material',
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
};
