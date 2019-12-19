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
    </View>
  );
};
// <BottomNavigation actions={actions} config={config2} secondary={true} />
// <BottomNavigation actions={actions} config={config2_2} color="blue" />
// <BottomNavigation actions={actions} config={config3} color="white" />
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
};
const config2_2 = {
  labelHidden: true,
  labelDirection: 'row-reverse',
};
const config3 = {
  labelHidden: true,
  color: 'teal',
};
