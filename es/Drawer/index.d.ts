import React, { FC } from 'react';
import './index.less';
declare type Position = 'left' | 'right' | 'top' | 'bottom';
export interface DrawerProps {
    layoutDom?: HTMLElement;
    className?: string;
    style?: React.CSSProperties;
    visible?: boolean;
    position?: Position;
    zIndex?: number;
    showMask?: boolean;
    destroyOnClose?: boolean;
    children?: React.ReactNode;
    maskClosable?: boolean;
    onClose?: (e?: React.MouseEvent | MouseEvent) => void;
    title?: React.ReactNode;
    showCloseIcon?: boolean;
    footer?: React.ReactNode;
    footerAlign?: 'left' | 'center' | 'right';
    okText?: string;
    cancelText?: string;
    lockBody?: boolean;
    loading?: boolean;
    onOk?: React.MouseEventHandler<HTMLElement>;
}
declare const Drawer: FC<DrawerProps>;
export default Drawer;
