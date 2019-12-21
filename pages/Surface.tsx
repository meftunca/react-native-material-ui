import React from 'react';
import {Surface, Text} from './../src';
import {View, ScrollView} from 'react-native';

const SurfacePage = () => {
  // console.clear();
  return (
    <ScrollView contentContainerStyle={{paddingVertical: 48}}>
      <Text align="center" gutterBottom={12}>
        Shadows
      </Text>
      {Array(10)
        .fill('')
        .map((i, k) => (
          <Surface padding={32} elevation={k} key={k} margin={[k + 2, 24]} />
        ))}
    </ScrollView>
  );
};

export default SurfacePage;
/**
      <Surface
        padding={0}
        margin={[10, 16]}
        elevation={5}
        direction="column"
        justify="flex-start"
        alignContent="flex-start"
        alignItems="flex-start">
        <Image
          source={{
            uri:
              'https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7SUIwTFk3c21ndFU/style-imagery-principles4.png',
            cache: 'only-if-cached',
          }}
        />
        <Surface
          padding={[16, 16]}
          direction="column"
          justify="flex-start"
          alignContent="flex-start"
          alignItems="flex-start"
          margin={0}>
          <Text variant="subtitle1" gutterBottom={8}>
            Deneme
          </Text>
          <Text variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            aliquam maiores rerum voluptatibus incidunt sed eum iusto deleniti
            tenetur! Nihil consequatur quidem nam rem illum sit accusantium
            blanditiis qui? Vitae?
          </Text>
        </Surface>
        <Surface
          padding={[0, 0]}
          margin={[8, 0]}
          direction="row"
          justify="flex-end"
          alignContent="flex-start"
          alignItems="flex-start">
          <Button dense icon="heart" color={Palette.red500}>
            Action 2
          </Button>
          <Button dense color={Palette.blue700}>
            <Icon
              name="comment"
              color={Palette.blue700}
              size={24}
              style={{marginRight: 8}}
            />
            <Text variant="button" color={Palette.blue700}>
              Action
            </Text>
          </Button>
        </Surface>
      </Surface> 
 
 */
