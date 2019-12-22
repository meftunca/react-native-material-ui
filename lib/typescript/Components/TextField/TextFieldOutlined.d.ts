import React from 'react';
import { TextInputProps } from 'react-native';
export interface TextFieldOutlinedProps extends TextInputProps {
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
declare const TextFieldOutlined: React.FC<TextFieldOutlinedProps>;
export default TextFieldOutlined;
