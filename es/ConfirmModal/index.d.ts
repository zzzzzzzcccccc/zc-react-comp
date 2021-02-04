import React from 'react';
import './index.less';
export interface ConfirmModalProps {
    zIndex?: number;
    top?: string;
    width?: number;
    title?: React.ReactNode;
    content?: React.ReactNode;
    okText?: string;
    cancelText?: string;
    className?: string;
    style?: React.CSSProperties;
    footer?: React.ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    buttonSize?: 'small' | 'large' | 'normal';
}
interface IConfirmModal {
    show: (opt: ConfirmModalProps) => void;
}
declare const ConfirmModal: IConfirmModal;
export default ConfirmModal;
