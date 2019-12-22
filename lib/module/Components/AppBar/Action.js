import React from 'react';
import IconButton from '../Buttons/IconButton';
/**
 *
 * @param example codes
 * <AppBar.Action icon="menu"/>
 * <AppBar.Action icon="menu" size={24} color="black" containerStyle={{}} />
 */
const Action = ({ containerStyle, ...buttonProps }) => {
    return (React.createElement(IconButton, Object.assign({}, buttonProps, { containerStyle: [{ margin: 8 }, containerStyle] })));
};
Action.displayName = 'Action';
export default Action;
