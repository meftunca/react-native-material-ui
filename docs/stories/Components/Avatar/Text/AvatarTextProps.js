import React from 'react';
import propTypes from 'prop-types';

export const AvatarTextProps = () => <div>deneme</div>;

AvatarTextProps.defaultProps = {
  size: 32,
  elevation: 0,
};

AvatarTextProps.propTypes = {
  elevation: propTypes.number,
  size: propTypes.number,
  style: propTypes.object,
  containerStyle: propTypes.object,
  padding: propTypes.number,
  color: propTypes.string,
  label: propTypes.string.isRequired,
  backgroundColor: propTypes.string,
  theme: propTypes.object,
};
