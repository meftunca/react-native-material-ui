import React from 'react';
import PropTypes from 'prop-types';

export const Typohraphy = () => <></>;

Typohraphy.defaultProps = {
  size: 24,
  family: 'materialCommunity',
};
Typohraphy.propTypes = {
  weight: PropTypes.oneOf([
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'bold',
  ]),
  size: PropTypes.number,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
  ]),
  color: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.oneOf(['primary']),
    PropTypes.oneOf(['secondary']),
    PropTypes.string,
  ]),
  contrast: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  dense: PropTypes.bool,
  animated: PropTypes.bool,
  gutterBottom: PropTypes.number,
  letterSpacing: PropTypes.number,
  style: PropTypes.any,
  children: PropTypes.any,
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
  theme: PropTypes.any,
};
export default Typohraphy;
