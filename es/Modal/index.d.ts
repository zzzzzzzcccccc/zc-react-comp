import React, { FC } from 'react';
import './index.less';
interface ModalProps {
  visible: boolean;
  top?: number;
  width?: number;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  destroyOnClose?: boolean;
  title?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  loading?: boolean;
  footer?: React.ReactNode;
  footerAlign?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  onOk?: () => void;
  onClose?: () => void;
  layoutDom?: HTMLElement;
  isMove?: boolean;
}
declare const Modal: FC<ModalProps>;
export default Modal;
