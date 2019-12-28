declare type Color = {
    surface: string;
    primary: string;
    secondary: string;
    accent: string;
    error: string;
    warning: string;
    text: string;
    darkenValue: number;
    lightenValue: number;
    defaultContrastValue: number;
};
declare type flexType = 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-end' | 'flex-start' | 'stretch';
declare type Root = {
    backgroundColor: string;
    elevation: number;
    borderRadius: number;
    margin: number;
    padding: number;
    overflow: string;
};
declare type Props = {
    justify: flexType;
    alignItems: flexType;
    alignContent: string;
    direction: string;
};
declare type Surface = {
    root: Root;
    props: Props;
};
declare type Components = {
    surface: Surface;
};
declare type FontSizes = {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    subtitle1: number;
    subtitle2: number;
    body1: number;
    body2: number;
    caption: number;
    button: number;
    overline: number;
};
declare type Contrasts = {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    subtitle1: number;
    subtitle2: number;
    body2: number;
    body1: number;
    caption: number;
    button: number;
    overline: number;
};
declare type FontWeights = {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    subtitle1: string;
    subtitle2: string;
    body1: string;
    body2: string;
    caption: string;
    button: string;
    overline: string;
};
declare type LetterSpacings = {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    subtitle1: number;
    subtitle2: number;
    body1: number;
    body2: number;
    caption: number;
    button: number;
    overline: number;
};
declare type durations = {
    small: number;
    medium: number;
    long: number;
};
declare type Typography = {
    fontSizes: FontSizes;
    contrasts: Contrasts;
    fontWeights: FontWeights;
    letterSpacings: LetterSpacings;
};
export declare type ThemeTypes = {
    dark: boolean;
    durations: durations;
    roundness: number;
    gutter: number;
    color: Color;
    spacing: (multiplier?: number) => number | undefined;
    components: Components;
    typography: Typography;
};
export {};
