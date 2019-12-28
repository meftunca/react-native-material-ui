/// <reference types="react" />
declare const FormControl: ({ type, color, size, disabled, }: {
    type?: "checkbox" | "radio";
    color?: string;
    size?: number;
    disabled?: boolean;
}) => JSX.Element;
export default FormControl;
