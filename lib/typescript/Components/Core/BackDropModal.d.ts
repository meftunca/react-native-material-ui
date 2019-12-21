import React from 'react';
interface BackDropModalProps {
    visible?: boolean;
    fullScreen?: boolean;
    backdropColor?: string;
    duration?: number;
    delay?: number;
    animationType?: 'fade' | 'slide' | 'none';
    onClose?: () => void | undefined;
    children?: React.ReactNode;
}
declare const BackDropModal: React.FC<BackDropModalProps>;
export default BackDropModal;
