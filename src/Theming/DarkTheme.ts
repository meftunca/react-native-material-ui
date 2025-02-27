import {fontSizes, contrasts, fontWeights, letterSpacings} from './Typography';
import {
  blue500,
  amber500,
  purple500,
  red500,
  teal500,
} from '../Helpers/palette';
import {ThemeTypes} from './ThemeTypes';

const DarkTheme: ThemeTypes = {
  dark: true,
  roundness: 4,
  durations: {
    small: 200,
    medium: 500,
    long: 1000,
  },
  gutter: 4,
  spacing: function(multiplier = 1) {
    return this.gutter * multiplier;
  },
  color: {
    surface: 'black',
    primary: blue500,
    secondary: teal500,
    accent: purple500,
    error: red500,
    warning: amber500,
    text: 'white',
    darkenValue: 0.3, // 0 - 1 arası bir değer
    lightenValue: 0.3, // 0 - 1 arası bir değer
    defaultContrastValue: 0, // 0 - 1 arası bir ddeğer
  },
  components: {
    surface: {
      root: {
        backgroundColor: 'black',
        elevation: 1, // 0-15
        borderRadius: 2, // sayı
        margin: 0, // 0-sonsuz | [number,number,...[number,number]]
        padding: 0, // 0-sonsuz | [number,number,...[number,number]]
        overflow: 'visible', //hidden or scroll
      },
      props: {
        justify: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'center',
        direction: 'row',
      },
    },
  },
  typography: {
    fontSizes,
    contrasts,
    fontWeights,
    letterSpacings,
  },
};

export default DarkTheme;
