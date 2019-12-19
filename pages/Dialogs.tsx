import React, {useState} from 'react';
import {Surface, Card, Text, Image, Button, Palette, Dialog} from './../src';

const DialogsPage = () => {
  const [alertDialog, setAlertDialog] = useState(false);
  const [defaultDialog, setDefaultDialog] = useState(false);
  return (
    <>
      <Button
        color={Palette.red500}
        icon="alert"
        onPress={() => setAlertDialog(!alertDialog)}>
        Alert Dialog
      </Button>
      <Button
        color={Palette.blue500}
        icon="check-all"
        onPress={() => setDefaultDialog(!alertDialog)}>
        Default Dialog Dialog
      </Button>
      <Dialog
        animationType="fade"
        visible={alertDialog}
        onClose={() => setAlertDialog(false)}>
        <Dialog.Header title="Alert" />
        <Dialog.Actions style={{justifyContent: 'flex-end'}}>
          <Button color={Palette.red500} onPress={() => setAlertDialog(false)}>
            Kapat
          </Button>
          <Button color={Palette.blue500} onPress={() => setAlertDialog(false)}>
            Tamam
          </Button>
        </Dialog.Actions>
      </Dialog>
      <Dialog
        animationType="slide"
        fullScreen
        visible={defaultDialog}
        onClose={() => setDefaultDialog(false)}>
        <Dialog.Header title="Alert" titleProps={{weight: '600'}} />
        <Dialog.Content>
          <Text variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            explicabo minima maxime ex cum incidunt quae eaque, beatae iusto
            soluta autem consequuntur illo? Nihil quos, quasi deserunt veritatis
            sint non?
          </Text>
        </Dialog.Content>
        <Dialog.Actions style={{justifyContent: 'flex-end'}}>
          <Button
            color={Palette.red500}
            onPress={() => setDefaultDialog(false)}>
            Kapat
          </Button>
          <Button
            color={Palette.blue500}
            onPress={() => setDefaultDialog(false)}>
            Tamam
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};
export default DialogsPage;
