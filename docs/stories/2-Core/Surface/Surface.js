import React from 'react';
import PropTypes from 'prop-types';

export const Surface = () => <></>;

Surface.defaultProps = {
  padding: 0,
  margin: 0,
  direction: 'row',
  alignContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  justify: 'center',
  cornerRaidus: 0,
  elevation: 0,
};
Surface.propTypes = {
  /** Theme value or default 0  */
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Theme value or default 0  */
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Theme value or default center  */
  justify: PropTypes.oneOfType([
    PropTypes.oneOf(['center']),
    PropTypes.oneOf(['space-between']),
    PropTypes.oneOf(['space-around']),
    PropTypes.oneOf(['space-evenly']),
    PropTypes.oneOf(['flex-end']),
    PropTypes.oneOf(['flex-start']),
    PropTypes.oneOf(['stretch']),
  ]),
  /** Theme value or default center  */
  alignItems: PropTypes.oneOfType([
    PropTypes.oneOf(['center']),
    PropTypes.oneOf(['space-between']),
    PropTypes.oneOf(['space-around']),
    PropTypes.oneOf(['space-evenly']),
    PropTypes.oneOf(['flex-end']),
    PropTypes.oneOf(['flex-start']),
    PropTypes.oneOf(['stretch']),
  ]),
  /** Theme value or default center  */
  alignContent: PropTypes.oneOfType([
    PropTypes.oneOf(['center']),
    PropTypes.oneOf(['space-between']),
    PropTypes.oneOf(['space-around']),
    PropTypes.oneOf(['space-evenly']),
    PropTypes.oneOf(['flex-end']),
    PropTypes.oneOf(['flex-start']),
    PropTypes.oneOf(['stretch']),
  ]),
  /** Theme value or default 0  */
  cornerRaidus: PropTypes.number,
  /** Theme value or default 0  */
  elevation: PropTypes.number,
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll']),
  /** Theme value or default row  */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /** Theme values */
  theme: PropTypes.any,
};
export default Surface;
