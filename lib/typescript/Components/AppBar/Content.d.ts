import React from 'react';
export interface AppBarContentProps {
    title?: string;
    subtitle?: string;
    color?: string;
    subtitleProps?: any;
    titleProps?: any;
}
declare const Content: React.FC<AppBarContentProps>;
export default Content;
