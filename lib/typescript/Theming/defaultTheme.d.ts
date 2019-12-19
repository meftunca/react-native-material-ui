declare const defaultTheme: {
    gutter: number;
    spacing: (multiplier?: number) => number;
    color: {
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
    components: {
        surface: {
            root: {
                backgroundColor: string;
                elevation: number;
                borderRadius: number;
                margin: number;
                padding: number;
                overflow: string;
            };
            props: {
                justify: string;
                alignItems: string;
                alignContent: string;
                direction: string;
            };
        };
    };
    typography: {
        fontSizes: {
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
        contrasts: {
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
        fontWeights: {
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
        letterSpacings: {
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
    };
};
export default defaultTheme;
