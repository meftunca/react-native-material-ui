import React from 'react';
export interface AppBarContentProps {
    primary?: string;
    secondary?: string;
    color?: string;
    secondaryProps?: any;
    primaryProps?: any;
}
declare const Content: React.FC<AppBarContentProps>;
export default Content;
