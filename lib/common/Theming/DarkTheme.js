import { fontSizes, contrasts, fontWeights, letterSpacings } from './Typography';
import { blue500, amber500, purple500, red500, teal500 } from '../Helpers/palette';
const DarkTheme = {
  dark: true,
  roundness: 4,
  durations: {
    small: 200,
    medium: 500,
    long: 1000
  },
  gutter: 4,
  spacing: function (multiplier = 1) {
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
    darkenValue: 0.3,
    lightenValue: 0.3,
    defaultContrastValue: 0
  },
  components: {
    surface: {
      root: {
        backgroundColor: 'black',
        elevation: 1,
        borderRadius: 2,
        margin: 0,
        padding: 0,
        overflow: 'visible'
      },
      props: {
        justify: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'center',
        direction: 'row'
      }
    }
  },
  typography: {
    fontSizes,
    contrasts,
    fontWeights,
    letterSpacings
  }
};
export default DarkTheme;