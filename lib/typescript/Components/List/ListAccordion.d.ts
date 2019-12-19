import React from 'react';
import { ListItemProps } from './ListItem';
declare const ListAccordion: React.FC<ListItemProps & {
    expanded?: boolean;
    children?: React.ReactNode;
    duration?: number;
    delay?: number;
    startDeg?: string;
    endDeg?: string;
}>;
export default ListAccordion;
