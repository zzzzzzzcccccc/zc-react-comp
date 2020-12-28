import React from 'react';
import './index.less';
interface ConfirmModalProps {
    zIndex?: number;
    top?: string;
    width?: number;
    title?: React.ReactNode;
    content?: React.ReactNode;
    okText?: string;
    cancelText?: string;
    className?: string;
    style?: React.CSSProperties;
    onOk?: () => void;
    onCancel?: () => void;
    buttonSize?: 'small' | 'large' | 'normal';
}
interface IConfirmModal {
    show: (opt: ConfirmModalProps) => void;
}
declare const ConfirmModal: IConfirmModal;
export default ConfirmModal;
