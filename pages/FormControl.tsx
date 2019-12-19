import React from 'react';
import {View} from 'react-native';
import {Palette, FormControl} from './../src';
const FormControlPage = () => {
  return (
    <View style={{padding: 8}}>
      <View style={{flexDirection: 'row'}}>
        <FormControl size={24} disabled />
        <FormControl type="radio" size={24} disabled />
      </View>
      <View style={{flexDirection: 'row'}}>
        <FormControl size={24} />
        <FormControl type="radio" size={24} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <FormControl size={20} color={Palette.red500} />
        <FormControl type="radio" size={20} color={Palette.red500} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <FormControl size={18} color={Palette.green500} />
        <FormControl type="radio" size={18} color={Palette.green500} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <FormControl size={16} color={Palette.orange500} />
        <FormControl type="radio" size={16} color={Palette.orange500} />
      </View>
    </View>
  );
};

export default FormControlPage;
