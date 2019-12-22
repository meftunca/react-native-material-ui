import React from 'react';
import { TextInputProps } from 'react-native';
export interface TextFieldFlatProps extends TextInputProps {
    defaultValue?: string;
    value?: string;
    label?: string;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
    count?: boolean;
    multiLine?: boolean;
    Left?: any;
    Right?: any;
    disabled?: boolean;
    ripple?: boolean;
    numberOfLines?: number;
    helperText?: string;
    bottomWrapperStyle?: object;
    clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always' | undefined;
    placeholder?: string;
    min?: number;
    max?: number;
    onChange?: (text: any) => void | null;
}
declare const TextFieldFlat: React.FC<TextFieldFlatProps>;
export default TextFieldFlat;
