import React from 'react';
import propTypes from 'prop-types';

export const List = () => <div>deneme</div>;

List.defaultProps = {
  duration: 250,
  endDeg: '180deg',
  startDeg: '0deg',
};

List.propTypes = {
  expanded: propTypes.bool,
  duration: propTypes.number,
  endDeg: propTypes.string,
  startDeg: propTypes.string,
  delay: propTypes.number,
};
