import React, {useState} from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
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
        <Button
          variant="contained"
          icon={Platform.OS === 'web' ? 'add' : 'plus'}
          onPress={() => {}}>
          contained
        </Button>
        <Button variant="contained" onPress={() => {}}>
          contained Round
        </Button>
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <Button
          variant="text"
          icon={Platform.OS === 'web' ? 'add' : 'plus'}
          onPress={() => {}}>
          contained
        </Button>
        <Button variant="text" cornerRadius={30} onPress={() => {}}>
          contained Round
        </Button>
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <Button
          variant="outlined"
          icon={Platform.OS === 'web' ? 'add' : 'plus'}
          onPress={() => {}}>
          contained
        </Button>
        <Button variant="outlined" cornerRadius={30} onPress={() => {}}>
          contained Round
        </Button>
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <IconButton
          icon={Platform.OS === 'web' ? 'comment' : 'cards'}
          color="warning"
          onPress={() => {}}
        />
        <IconButton
          icon={Platform.OS === 'web' ? 'comment' : 'cards'}
          color="green"
          onPress={() => {}}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 8}}>
        <FAB
          icon={Platform.OS === 'web' ? 'comment' : 'cards'}
          color="warning"
          label="warning"
          onPress={() => {}}
        />
        <FAB
          icon={Platform.OS === 'web' ? 'comment' : 'cards'}
          color="green"
          label="green"
          onPress={() => {}}
        />
      </View>
      <Button variant="outlined" cornerRadius={30} onPress={() => {}}>
        Outlined Round
      </Button>

      <Button variant="text" type="drawer" onPress={() => {}}>
        Drawer Item
      </Button>
    </SafeAreaView>
  );
};

export default ButtonPage;
