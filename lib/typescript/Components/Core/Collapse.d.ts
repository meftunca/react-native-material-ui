import React from 'react';
interface CollapseProps {
    expanded?: boolean;
    delay?: number;
    duration?: number;
    children?: React.ReactNode;
    type?: 'position' | 'height';
    easyFunc?: (value: number) => number;
}
declare const Collapse: React.FC<CollapseProps>;
export default Collapse;
