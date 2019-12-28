// @ts-nocheck
import {create} from '@storybook/theming/create';
const version = require('./../../package.json');
let sidebarImage = require('../public/storybook.png');
export default create({
  base: 'light',
  brandTitle: `<div style="display:flex;align-content:center;flex-direction:column; margin-bottom:24px"><img src="${sidebarImage}" width="80" height="80" /><br/><h2>React Native Variant\nMaterial UI</h2><br/><b>Version: ${version.version}</b></div>`,
  // brandImage: '/brand.png',
  // brandTitle: 'React Native Variant Material UI',
  brandUrl: 'https://meftunca.github.io/react-native-variant',
  barSelectedColor: 'red',
  barTextColor: '#444',
  barBg: '#e9e9e9',
  appBorderRadius: 6,
  inputBorderRadius: 6,
  appBg: '#fff',
  appBorderColor: '#d5d5d5',
  appContentBg: '#f9f9f9',
  inputBg: '#f6f6f6',
  colorPrimary: '#EC6400',
  colorSecondary: '#00A5E7',
  textColor: '#333',
  textInverseColor: '#777',
  inputTextColor: '#444',
});
