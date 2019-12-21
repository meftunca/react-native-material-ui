import React from 'react';
import {action} from '@storybook/addon-actions';
// import {Button} from '@storybook/react/demo';
import {Button, ThemeProvider} from '../src';
// import {Button} from 'react-native';

// import ButtonPage from './../pages/Button';
export default {
  title: 'Button',
};

// export const Examples = ButtonPage;
export const text = () => (
  <>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
  </>
);

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
