import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {AppBar, Banner, useAlert, Button, useSnackbar} from './../src';
const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ';
const BannerPage = ({}) => {
  const [visible, setVisible] = useState(false);
  const {setAlert, onDismiss, onOpen} = useAlert();
  useEffect(() => {
    setAlert({
      header: {title: 'Title', subtitle: 'Sub Title'},
      contentText: lorem,
    });
  }, []);
  return (
    <View>
      <AppBar>
        <AppBar.Action icon="menu" size={24} color="black" onPress={onOpen} />
        <AppBar.Content title="Başlık" subtitle="Alt Başlık" />
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
      <ScrollView>
        <SnacbarExample />
        {Array(20)
          .fill('')
          .map((i, k) => (
            <View
              key={k}
              style={{padding: 36, backgroundColor: 'silver', marginBottom: 4}}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const SnacbarExample = () => {
  const {onOpen, onDismiss, onToggle, setSnacbar} = useSnackbar();

  useEffect(() => {
    setSnacbar({
      label: 'Snacbar',
      action: {
        label: 'undo',
        onPress: onDismiss,
      },
    });
  }, []);

  return <Button onPress={onOpen}>Snackbar</Button>;
};

export default BannerPage;
