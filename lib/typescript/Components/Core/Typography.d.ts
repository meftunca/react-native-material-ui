import React from 'react';
import { Text as TextBase } from 'react-native';
import { ThemeTypes } from 'Theming';
export interface TextProps extends React.ComponentProps<typeof TextBase> {
    weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold';
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
    color?: 'primary' | 'secondary' | string;
    contrast?: number | boolean;
    dense?: boolean;
    gutterBottom?: number;
    letterSpacing?: number;
    children?: any;
    align?: 'center' | 'left' | 'right' | 'justify';
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    theme: ThemeTypes;
}
declare class Typography extends React.PureComponent<TextProps> {
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<TextProps, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "variant" | "weight" | "color" | "contrast" | "dense" | "gutterBottom" | "letterSpacing" | "align" | "transform"> & {
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
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<TextProps, any> & typeof Typography) | (React.FunctionComponent<TextProps> & typeof Typography), {}>) | (React.FunctionComponent<Pick<TextProps, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "variant" | "weight" | "color" | "contrast" | "dense" | "gutterBottom" | "letterSpacing" | "align" | "transform"> & {
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
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<TextProps, any> & typeof Typography) | (React.FunctionComponent<TextProps> & typeof Typography), {}>);
export default _default;
