import React from 'react';
import {View} from 'react-native';
import {Text, Icon, BottomNavigation, AppBar, Palette} from '../src';

const BottomNavigationPage = ({}) => {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <BottomNavigation
        actions={actions}
        scenes={scenes}
        config={config1}
        onChangeScene={({sceneKey}) => {
          console.log('sceneKey', sceneKey);
        }}
      />
      <BottomNavigation
        actions={actions}
        config={{
          labelHidden: true,
          labelDirection: 'row',
          initialScene: 'Home',
        }}
        secondary={true}
      />
      <BottomNavigation
        actions={actions}
        config={{
          labelHidden: true,
          labelDirection: 'row-reverse',
          initialScene: 'Home',
        }}
        color="blue"
      />
      <BottomNavigation actions={actions} config={config3} color="white" />
    </View>
  );
};

export default BottomNavigationPage;

const scenes: Array<{key?: string; Scene?: React.ReactNode}> = [
  {key: 'Home', Scene: () => <Text>Home</Text>},
  {key: 'Music', Scene: () => <Text>Music</Text>},
  {key: 'About', Scene: () => <Text>About</Text>},
];

const actions = [
  {
    label: 'test',
    icon: 'timer',
    sceneKey: 'Home',
  },
  {
    label: 'test1',
    icon: 'delete',
    sceneKey: 'Music',
  },
  {
    label: 'test2',
    icon: 'face',
    sceneKey: 'About',
  },
];
const config1 = {
  labelHidden: false,
};
const config2 = {
  labelHidden: true,
  labelDirection: 'row',
  initialScene: 'Home',
};
const config2_2 = {
  labelHidden: true,
  labelDirection: 'row-reverse',
};
const config3 = {
  labelHidden: true,
  color: 'teal',
};
