import React from 'react';
import { TextInputProps } from 'react-native';
interface TextFieldProps extends TextInputProps {
    variant?: 'outlined' | 'contained' | 'flat';
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
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
