import React from 'react';
import propTypes from 'prop-types';

export const MenuProps = () => <div>deneme</div>;

MenuProps.defaultProps = {
  elevation: 2,
  corderRadius: 4,
  duration: 150,
  delay: 1,
};
MenuProps.propTypes = {
  children: propTypes.node,
  trigger: propTypes.element,
  render: propTypes.func,
  corderRadius: propTypes.number,
  duration: propTypes.number,
  delay: propTypes.number,
  minWidth: propTypes.number,
  elevation: propTypes.number,
};
