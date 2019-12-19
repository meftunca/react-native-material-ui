import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  Ripple,
  IconButton,
  Collapse,
  Surface,
  Button,
  Text,
  FAB,
} from './../src';

const ButtonPage = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', margin: 8}}>
        <Button variant="contained" icon="plus">
          contained
        </Button>
        <Button variant="contained" radius={30}>
          contained Round
        </Button>
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <Button variant="text" icon="plus">
          contained
        </Button>
        <Button variant="text" radius={30}>
          contained Round
        </Button>
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <Button variant="outlined" icon="plus">
          contained
        </Button>
        <Button variant="outlined" radius={30}>
          contained Round
        </Button>
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <IconButton icon="cards" color="warning" />
        <IconButton icon="cards" color="green" />
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <FAB icon="cards" color="warning" label="warning" />
        <FAB icon="cards" color="green" label="green" />
      </View>
      <Button variant="outlined" radius={30}>
        Outlined Round
      </Button>

      <Button variant="text" type="drawer">
        Drawer Item
      </Button>
    </SafeAreaView>
  );
};

export default ButtonPage;
