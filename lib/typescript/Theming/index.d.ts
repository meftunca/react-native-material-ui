/// <reference types="react" />
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
import ThemeTypes from './ThemeTypes';
declare const ThemeProvider: import("react").ComponentType<{
    theme?: ThemeTypes;
}>, withTheme: <Props extends {
    theme: ThemeTypes;
}, C>(WrappedComponent: (import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C)) => (import("react").ComponentClass<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ThemeTypes>;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>) | (import("react").FunctionComponent<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ThemeTypes>;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>), useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<ThemeTypes>) => ThemeTypes;
export { ThemeProvider, withTheme, useTheme, DarkTheme, LightTheme, ThemeTypes };
