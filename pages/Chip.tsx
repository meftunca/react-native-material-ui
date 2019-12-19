import React from 'react';
import {View} from 'react-native';
import {Chip, Button, IconButton} from './../src';

const ChipPage = ({}) => {
  return (
    <>
      <View style={{flexDirection: 'row', padding: 16}}>
        <Chip label="Deneme" isSelected={true} />
        <Chip variant="flat" label="Deneme" isSelected={true} />
      </View>
      <View style={{flexDirection: 'row', padding: 16}}>
        <Chip icon="check" label="Deneme" />
        <Chip icon="check" variant="flat" label="Deneme" />
      </View>
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
