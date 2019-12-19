import React from 'react';
import IconButton, {IconButtonProps} from '../Buttons/IconButton';
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
