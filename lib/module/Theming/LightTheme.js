import { fontSizes, contrasts, fontWeights, letterSpacings } from './Typography';
import { blue500, amber500, purple500, red500, grey900, teal500, } from '../Helpers/palette';
const LightTheme = {
    dark: false,
    roundness: 4,
    durations: {
        small: 200,
        medium: 500,
        long: 1000,
    },
    gutter: 4,
    spacing: function (multiplier = 1) {
        return this.gutter * multiplier;
    },
    color: {
        surface: 'white',
        primary: blue500,
        secondary: teal500,
        accent: purple500,
        error: red500,
        warning: amber500,
        text: grey900,
        darkenValue: 0.3,
        lightenValue: 0.3,
        defaultContrastValue: 0,
    },
    components: {
        surface: {
            root: {
                backgroundColor: 'white',
                elevation: 1,
                borderRadius: 2,
                margin: 0,
                padding: 0,
                overflow: 'visible',
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
export default LightTheme;
