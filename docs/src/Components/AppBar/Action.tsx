import React from 'react';
import IconButton, {IconButtonProps} from '../Buttons/IconButton';

/**
 *
 * @param example codes
 * <AppBar.Action icon="menu"/>
 * <AppBar.Action icon="menu" size={24} color="black" containerStyle={{}} />
 */
const Action: React.FC<IconButtonProps> = ({
  containerStyle,
  ...buttonProps
}) => {
  return (
    <IconButton
      {...buttonProps}
      containerStyle={[{margin: 8}, containerStyle]}
    />
  );
};
Action.displayName = 'Action';

export default Action;
