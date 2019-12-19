import React from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Button, TextField, Text, IconButton} from '../src';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextFieldPage = () => {
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
        <View style={{marginTop: 20, marginBottom: 5, paddingHorizontal: 12}}>
          <Text>Outline TextField</Text>
        </View>
        <TextField
          label="Outline Input with icon"
          variant="outlined"
          Left={(props: any) => <Icon name="comment" {...props} />}
          Right={(props: any) => (
            <IconButton {...props} role="icon" icon="send" />
          )}
        />
        <TextField
          label="Outline Input"
          variant="outlined"
          helperText="Counter!"
          count={true}
          min={3}
          max={10}
        />
        <TextField
          label="Outline Input"
          variant="outlined"
          helperText="Help me !"
        />
        <TextField
          label="Outline Input"
          variant="outlined"
          error
          helperText="Help me !"
        />
        <TextField
          label="Outline Input"
          variant="outlined"
          success
          helperText="Good"
        />
        <TextField
          label="Outline Input"
          variant="outlined"
          warning
          helperText="Bad"
        />
        <TextField
          label="Outline multiLine Input"
          variant="outlined"
          multiLine={true}
          numberOfLines={3}
        />
        <View style={{marginTop: 20, marginBottom: 5, paddingHorizontal: 12}}>
          <Text>FlatBox TextField</Text>
        </View>
        <TextField
          label="Outline Input with icon"
          variant="contained"
          Left={(props: any) => <Icon name="comment" {...props} />}
          Right={(props: any) => <Icon name="send" {...props} />}
        />
        <TextField label="FlatBox Input" variant="contained" />
        <TextField
          label="FlatBox Input"
          variant="contained"
          helperText="Counter!"
          count={true}
          min={3}
          max={10}
        />
        <TextField
          label="FlatBox Input"
          variant="contained"
          helperText="Help me !"
        />
        <TextField
          label="FlatBox Input"
          variant="contained"
          error
          helperText="Help me !"
        />
        <TextField
          label="FlatBox Input"
          variant="contained"
          success
          helperText="Good"
        />
        <TextField
          label="FlatBox Input"
          variant="contained"
          warning
          helperText="Bad"
        />
        <TextField
          label="FlatBox multiLine Input"
          variant="contained"
          multiLine={true}
          numberOfLines={3}
        />
        <View style={{marginTop: 20, marginBottom: 5, paddingHorizontal: 12}}>
          <Text>Default Flat TextField</Text>
        </View>
        <TextField
          label="Flat Input with icon"
          Left={(props: any) => <Icon name="comment" {...props} />}
          Right={(props: any) => <Icon name="send" {...props} />}
        />
        <TextField label="Default Flat Input" />
        <TextField label="Count Input" count={true} min={3} max={10} />
        <TextField label="Helper Flat Input" helperText="Help me !" />
        <TextField label="Error Action" error helperText="Help me !" />
        <TextField label="Success Action" success helperText="Good" />
        <TextField label="Warning Action" warning helperText="Bad" />
        <TextField
          label="Default Flat  multiLine Action"
          multiLine={true}
          numberOfLines={3}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextFieldPage;
