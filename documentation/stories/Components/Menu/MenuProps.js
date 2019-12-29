import React from 'react';
import propTypes from 'prop-types';
import {
  Menu,
  Surface,
  Icon,
  Button,
  Text,
} from '@devloops/react-native-variant';

export const MenuProps = () => (
  <Menu
    minWidth={180}
    trigger={
      <Button type="button" variant="contained" icon="face" color="black">
        item 1
      </Button>
    }
    render={({onDismiss}) => (
      <>
        <Button
          type="drawer"
          color="black"
          icon="check-all"
          onPress={onDismiss}>
          item 1
        </Button>
        <Button
          type="drawer"
          color="black"
          icon="check-all"
          onPress={onDismiss}>
          item 2
        </Button>
        <Button
          type="drawer"
          color="black"
          icon="check-all"
          onPress={onDismiss}>
          item 3
        </Button>
      </>
    )}
  />
);

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
