import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Icon, BottomNavigation, AppBar, Palette, Banner} from './../src';
const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ';
const BannerPage = ({}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <AppBar>
        <AppBar.Action icon="menu" size={24} color="black" />
        <AppBar.Content primary="Başlık" secondary="Alt Başlık" />
        <AppBar.Action
          icon="arrow-left"
          size={24}
          color="black"
          onPress={() => setVisible(!visible)}
        />
      </AppBar>
      <Banner
        visible={visible}
        actions={[{label: 'Fix It', onPress: () => {}}]}
        contentText={lorem}
      />
    </View>
  );
};
export default BannerPage;
