import React from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Button, TextField, Text, IconButton} from '../src';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextFieldPage = () => {
  return (
    <KeyboardAvoidingView enabled behavior="position">
      <ScrollView>
        <View style={{marginTop: 20, marginBottom: 5, paddingHorizontal: 12}}>
          <Text>Outline TextField</Text>
        </View>
        <TextField.Outlined
          label="Outline Input with icon"
          Left={(props: any) => <Icon name="comment" {...props} />}
          Right={(props: any) => (
            <IconButton {...props} role="icon" icon="send" />
          )}
        />
        <TextField.Outlined
          label="Outline Input"
          helperText="Counter!"
          count={true}
          min={3}
          max={10}
        />
        <TextField.Outlined label="Outline Input" helperText="Help me !" />
        <TextField.Outlined
          label="Outline Input"
          error
          helperText="Help me !"
        />
        <TextField.Outlined label="Outline Input" success helperText="Good" />
        <TextField.Outlined label="Outline Input" warning helperText="Bad" />
        <TextField.Outlined
          label="Outline multiLine Input"
          multiLine={true}
          numberOfLines={3}
        />
        <View style={{marginTop: 20, marginBottom: 5, paddingHorizontal: 12}}>
          <Text>FlatBox TextField</Text>
        </View>
        <TextField.Contained
          label="Outline Input with icon"
          Left={(props: any) => <Icon name="comment" {...props} />}
          Right={(props: any) => <Icon name="send" {...props} />}
        />
        <TextField.Contained label="FlatBox Input" />
        <TextField.Contained
          label="FlatBox Input"
          helperText="Counter!"
          count={true}
          min={3}
          max={10}
        />
        <TextField.Contained label="FlatBox Input" helperText="Help me !" />
        <TextField.Contained
          label="FlatBox Input"
          error
          helperText="Help me !"
        />
        <TextField.Contained label="FlatBox Input" success helperText="Good" />
        <TextField.Contained label="FlatBox Input" warning helperText="Bad" />
        <TextField.Contained
          label="FlatBox multiLine Input"
          multiLine={true}
          numberOfLines={3}
        />
        <View style={{marginTop: 20, marginBottom: 5, paddingHorizontal: 12}}>
          <Text>Default Flat TextField</Text>
        </View>
        <TextField.Flat
          label="Flat Input with icon"
          Left={(props: any) => <Icon name="comment" {...props} />}
          Right={(props: any) => <Icon name="send" {...props} />}
        />
        <TextField.Flat label="Default Flat Input" />
        <TextField.Flat label="Count Input" count={true} min={3} max={10} />
        <TextField.Flat label="Helper Flat Input" helperText="Help me !" />
        <TextField.Flat label="Error Action" error helperText="Help me !" />
        <TextField.Flat label="Success Action" success helperText="Good" />
        <TextField.Flat label="Warning Action" warning helperText="Bad" />
        <TextField.Flat
          label="Default Flat  multiLine Action"
          multiLine={true}
          numberOfLines={3}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextFieldPage;
