import React from 'react';
import { Settings } from './settings';
import { ThemeTypes } from '.';
declare type Props = {
    children: React.ReactNode;
    theme?: ThemeTypes;
    settings?: Settings;
};
export default class Provider extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
