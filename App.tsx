/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Router from './pages';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <Router />
    </React.Fragment>
  );
};

export default App;
