/// <reference types="react" />
import defaultTheme from './defaultTheme';
import { ThemeTypes } from './ThemeTypes';
declare const ThemeProvider: import("react").ComponentType<{
    theme?: {
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
}>, withTheme: <Props extends {
    theme: {
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
}, C>(WrappedComponent: (import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C)) => (import("react").ComponentClass<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<{
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
    }>;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>) | (import("react").FunctionComponent<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<{
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
    }>;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>), useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<{
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
}>) => {
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
export { ThemeProvider, withTheme, useTheme, defaultTheme, ThemeTypes };
