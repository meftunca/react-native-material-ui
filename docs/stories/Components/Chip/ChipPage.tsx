import React, {useState} from 'react';
import {View} from 'react-native';
import {Chip, IconButton, Button, Text} from '@devloops/react-native-variant';
const ChipPage = ({}) => {
  const [state, setState] = useState(null);
  return (
    <>
      <Text variant="subtitle1">With Selectable</Text>
      <View style={{flexDirection: 'row', padding: 16}}>
        <Chip
          label="Deneme"
          isSelected={state === 0}
          selectedIcon="check"
          onSelect={() => setState(state === 0 ? null : 0)}
        />
        <Chip
          variant="flat"
          label="Deneme"
          isSelected={state === 1}
          selectedIcon="check"
          onSelect={() => setState(state === 1 ? null : 1)}
        />
      </View>
      <Text variant="subtitle1">With Icon</Text>
      <View style={{flexDirection: 'row', padding: 16}}>
        <Chip icon="check" label="Deneme" />
        <Chip icon="check" variant="flat" label="Deneme" />
      </View>
      <Text variant="subtitle1">With Action</Text>
      <View style={{flexDirection: 'row', padding: 16}}>
        <Chip
          icon="check"
          label="Deneme"
          action={({...props}) => <IconButton {...props} icon="close" />}
        />
        <Chip
          icon="check"
          variant="flat"
          label="Deneme"
          action={({...props}) => <IconButton {...props} icon="close" />}
        />
      </View>
      <Text variant="subtitle1">With Avatar</Text>

      <View style={{flexDirection: 'row', padding: 16}}>
        <Chip
          avatarSource={{
            uri:
              'https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7SUIwTFk3c21ndFU/style-imagery-principles4.png',
            cache: 'force-cache',
          }}
          label="Deneme"
          action={({...props}) => <IconButton {...props} icon="close" />}
        />
        <Chip
          avatarSource={{
            uri:
              'https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7SUIwTFk3c21ndFU/style-imagery-principles4.png',
            cache: 'force-cache',
          }}
          variant="flat"
          label="Deneme"
          action={({...props}) => <IconButton {...props} icon="close" />}
        />
      </View>
    </>
  );
};
export default ChipPage;
