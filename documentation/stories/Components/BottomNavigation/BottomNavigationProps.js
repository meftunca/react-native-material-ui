import React from 'react';
import propTypes from 'prop-types';

export const BottomNavigationProps = () => <div>deneme</div>;
export const BottomNavigationActionProps = () => <div>deneme</div>;

BottomNavigationProps.defaultProps = {
  config: [],
  actions: [],
};
BottomNavigationProps.propTypes = {
  config: propTypes.shape({
    initialScene: propTypes.string,
    labelHidden: propTypes.bool,
    labelDirection: propTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse',
    ]),
    color: propTypes.string,
  }),
  actions: propTypes.any,
  scenes: propTypes.any,
  onChangeScene: propTypes.func,
  color: propTypes.string,
  secondary: propTypes.bool,
  top: propTypes.any,
  theme: propTypes.any,
};

BottomNavigationActionProps.defaultProps = {
  labelDirection: 'column',
};
BottomNavigationActionProps.propTypes = {
  label: propTypes.string,
  icon: propTypes.string,
  color: propTypes.string,
  sceneKey: propTypes.string,
  labelHidden: propTypes.bool,
  labelDirection: propTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  index: propTypes.number,
  handleChange: propTypes.any,
  iconSize: propTypes.number,
  active: propTypes.string,
};
