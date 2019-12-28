import React from 'react';
import {View, ScrollView} from 'react-native';
import {Avatar, List, IconButton, Palette} from './../src';
export default () => {
  return (
    <ScrollView>
      <List.Accordion title="List Accordion" startDeg="90deg" expanded={false}>
        <View style={{margin: 8}}>
          {Array(3)
            .fill('')
            .map((i, k) => (
              <List.Item
                key={k}
                type="avatar"
                left={({...props}) => (
                  <IconButton {...props} icon="account" size={24} />
                )}
                right={({...props}) => (
                  <IconButton {...props} icon="chevron-right" />
                )}
                title={'item ' + (k + 4)}
                subtitle={'Subtitle ' + (k + 4)}
              />
            ))}
        </View>
      </List.Accordion>
      {Array(3)
        .fill('')
        .map((i, k) => (
          <List.Item
            key={k}
            type="avatar"
            left={({...props}) => (
              <Avatar.Text
                {...props}
                size={40}
                backgroundColor={Palette.blue500}
                label="MB"
              />
            )}
            right={({...props}) => (
              <IconButton icon="chevron-right" {...props} />
            )}
            title={'item ' + (k + 1)}
            subtitle={'Subtitle ' + (k + 1)}
          />
        ))}
      {Array(3)
        .fill('')
        .map((i, k) => (
          <List.Item
            key={k}
            type="avatar"
            left={({...props}) => (
              <Avatar.Image
                {...props}
                size={40}
                source={{
                  uri: 'http://endlesstheme.com/Endless1.5.1/img/user2.jpg',
                  cache: 'force-cache',
                }}
              />
            )}
            right={({...props}) => (
              <IconButton icon="chevron-right" {...props} />
            )}
            title={'item ' + (k + 1)}
            subtitle={'Subtitle ' + (k + 1)}
          />
        ))}
      {Array(3)
        .fill('')
        .map((i, k) => (
          <List.Item
            key={k}
            type="avatar"
            left={({...props}) => (
              <Avatar.Icon
                {...props}
                size={40}
                icon="plus"
                backgroundColor={Palette.purple500}
              />
            )}
            right={({...props}) => (
              <IconButton icon="chevron-right" {...props} />
            )}
            title={'item ' + (k + 1)}
            subtitle={'Subtitle ' + (k + 1)}
          />
        ))}
      {Array(3)
        .fill('')
        .map((i, k) => (
          <List.Item
            key={k}
            type="icon"
            left={({...props}) => <IconButton icon="account" {...props} />}
            right={({...props}) => (
              <IconButton
                {...props}
                icon="chevron-right"
                onPress={e => {
                  console.log('e', e);
                }}
              />
            )}
            title={'item ' + (k + 4)}
            subtitle={'Subtitle ' + (k + 4)}
          />
        ))}
    </ScrollView>
  );
};
