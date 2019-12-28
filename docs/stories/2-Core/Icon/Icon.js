import React from 'react';
import PropTypes from 'prop-types';

export const Icon = () => <></>;

Icon.defaultProps = {
  size: 24,
  family: 'materialCommunity',
};
Icon.propTypes = {
  family: PropTypes.oneOf([
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
  name: PropTypes.string.isRequired,
  iosOnly: PropTypes.string,
  androidOnly: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
export default Icon;
