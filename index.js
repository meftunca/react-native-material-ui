// @ts-nocheck
import {AppRegistry, Platform} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';
// import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
  // ReactDom.render(<App />, document.getElementById('root'));
}
