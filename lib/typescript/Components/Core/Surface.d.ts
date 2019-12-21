import React from 'react';
import { ViewProps } from 'react-native';
import { ThemeTypes } from '../../Theming';
declare type flexType = 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-end' | 'flex-start' | 'stretch' | undefined;
export interface SurfaceProps extends ViewProps {
    padding?: number[] | string[] | number | string;
    margin?: number[] | string[] | number | string;
    justify?: flexType;
    alignItems?: flexType;
    alignContent?: flexType;
    cornerRaidus?: number;
    elevation?: number;
    overflow?: 'visible' | 'hidden' | 'scroll';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    theme?: ThemeTypes;
}
declare const Surface: React.FC<SurfaceProps>;
export default Surface;
