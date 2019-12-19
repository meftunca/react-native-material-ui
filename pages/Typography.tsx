import React from 'react';
import {Text} from './../src';
import {ScrollView} from 'react-native';
type variantsType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';
const variantList = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
];

export default () => {
  return (
    <ScrollView contentContainerStyle={{padding: 12}}>
      {variantList.map((i: variantsType, k) => (
        <Text key={k} variant={i}>
          {i}
        </Text>
      ))}
    </ScrollView>
  );
};
