import React from 'react';
import {View} from 'react-native';
import {Text, Icon, Carousel, AppBar, Palette} from './../src';

const CarouselPage = ({}) => {
  return (
    <View>
      <Carousel imgData={imgData} />
    </View>
  );
};
export default CarouselPage;
const imgData = [
  {
    uri:
      'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=50',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1505744768106-34d8c47a1327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=50',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=50',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=50',
  },
];
