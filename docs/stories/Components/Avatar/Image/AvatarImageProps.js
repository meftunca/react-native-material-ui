import React from 'react';
import propTypes from 'prop-types';

export const AvatarImageProps = () => <div>deneme</div>;

AvatarImageProps.defaultProps = {
  size: 32,
  elevation: 0,
};

AvatarImageProps.propTypes = {
  elevation: propTypes.number,
  size: propTypes.number,
  style: propTypes.object,
  containerStyle: propTypes.object,
  padding: propTypes.number,
  /**Image Source require() or {uri?:string} */
  source: propTypes.object.isRequired,
  backgroundColor: propTypes.string,
  theme: propTypes.object,
};
