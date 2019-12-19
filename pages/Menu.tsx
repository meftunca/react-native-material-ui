import React from 'react';
import {View} from 'react-native';
import {Button, TextField, Text, Hooks, Menu, IconButton, Icon} from '../src';

const MenuPage = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        padding: 32,
      }}>
      <MenuBasic
        trigger={
          <View style={{minHeight: 50}}>
            <TextField
              label="Outline Input"
              helperText="Counter!"
              variant="contained"
              count={true}
              min={3}
              max={10}
            />
          </View>
        }
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          alignItems: 'center',
        }}>
        <MenuBasic />
        <MenuBasic />
        <MenuBasic />
      </View>
    </View>
  );
};
const MenuBasic = ({trigger}: {trigger?: JSX.Element}) => (
  <Menu
    key={Math.random() * 200}
    minWidth={180}
    trigger={trigger || <Icon name="face" />}
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
export default MenuPage;
