import React from 'react';
import { TextProps } from './../Core/Typography';
import { ButtonProps } from 'Components/Buttons/Button';
declare type actionsProps = ButtonProps & {
    label: string;
};
interface BannerProps {
    visible?: boolean;
    actions?: actionsProps | actionsProps[];
    contentText?: string;
    contentTextProps?: TextProps;
    duration?: number;
    delay?: number;
}
declare const BannerWrapper: React.FC<BannerProps>;
export default BannerWrapper;
