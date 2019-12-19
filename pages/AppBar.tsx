import React from 'react';
import {View} from 'react-native';
import {Text, Icon, BottomNavigation, AppBar, Palette} from './../src';

const AppBarPage = ({}) => {
  return (
    <View>
      <AppBar>
        <AppBar.Action icon="menu" size={24} color="black" />
        <AppBar.Content primary="Başlık" secondary="Alt Başlık" />
        <AppBar.Action icon="arrow-left" size={24} color="black" />
      </AppBar>
      <AppBar
        subChildren={props => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text variant="h4">Alt Başlık Alanı</Text>
            <Icon name="timer" size={64} />
          </View>
        )}>
        <AppBar.Action icon="menu" size={24} />
        <AppBar.Content primary="Alt Başlık Alanı" />
        <AppBar.Action icon="arrow-left" size={24} />
      </AppBar>
      <AppBar style={{flex: 1, flexDirection: 'column'}} color="purple">
        <AppBar.Action
          icon="archive"
          color={Palette.blue500}
          onPress={() => console.log('Pressed archive')}
        />
        <AppBar.Action
          icon="email"
          color={Palette.amber600}
          onPress={() => console.log('Pressed mail')}
        />
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: '#f8f4f4',
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 25,
            zIndex: 10,
          }}>
          <Icon
            name="plus"
            color="#f00"
            style={{alignSelf: 'center'}}
            size={28}
          />
        </View>
        <AppBar.Action
          icon="label"
          color={Palette.red500}
          onPress={() => console.log('Pressed label')}
        />
        <AppBar.Action
          icon="delete"
          color={Palette.purple500}
          onPress={() => console.log('Pressed delete')}
        />
      </AppBar>
    </View>
  );
};
export default AppBarPage;
