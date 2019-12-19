export declare type Color = {
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
export declare type Root = {
    backgroundColor: string;
    elevation: number;
    borderRadius: number;
    margin: number;
    padding: number;
    overflow: string;
};
export declare type Props = {
    justify: flexType;
    alignItems: flexType;
    alignContent: string;
    direction: string;
};
export declare type Surface = {
    root: Root;
    props: Props;
};
export declare type Components = {
    surface: Surface;
};
export declare type FontSizes = {
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
export declare type Contrasts = {
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
export declare type FontWeights = {
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
export declare type LetterSpacings = {
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
export declare type Typography = {
    fontSizes: FontSizes;
    contrasts: Contrasts;
    fontWeights: FontWeights;
    letterSpacings: LetterSpacings;
};
export declare type ThemeTypes = {
    gutter: number;
    color: Color;
    spacing: (multiplier?: number) => number;
    components: Components;
    typography: Typography;
};
export {};
