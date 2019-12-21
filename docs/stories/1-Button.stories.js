import React from 'react';
import {action} from '@storybook/addon-actions';
// import {Button} from '@storybook/react/demo';
import {
  Button,
  ThemeProvider,
  LightTheme,
} from '@devloops/react-native-variant';
// import {Button} from 'react-native';

// import ButtonPage from './../pages/Button';
export default {
  title: 'Button',
};

// export const Examples = ButtonPage;
export const text = () => (
  <ThemeProvider theme={LightTheme}>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
  </ThemeProvider>
);

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
