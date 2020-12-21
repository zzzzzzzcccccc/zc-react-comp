import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Mask from '../Mask';
import Button from '../Button';
import './index.less';
import { toggleBodyOverflow } from '../utils';
import varStyle from '../assets/styles/varStyle';

interface ModalProps {
  visible: boolean;
  top?: string;
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
}

const cssPrefix: string = 'r-zc-modal';
const Modal: FC<ModalProps> = ({
  visible,
  className,
  style,
  zIndex = varStyle.modalZIndex,
  width = 600,
  top = '50px',
  title,
  destroyOnClose = true,
  children,
  footer,
  okText = '确认',
  cancelText = '取消',
  footerAlign = 'right',
  loading,
  layoutDom = document.body,
  onOk,
  onClose,
}) => {
  useEffect(() => {
    toggleBodyOverflow(visible);
  }, [visible]);

  return ReactDOM.createPortal(
    <div>
      {visible && <Mask style={{ zIndex }} />}
      <div
        className={classNames(cssPrefix)}
        style={{ display: visible ? 'block' : 'none', zIndex }}
      >
        <CSSTransition timeout={400} in={visible} classNames="z-modal" appear>
          {destroyOnClose && !visible ? (
            <div />
          ) : (
            <div
              className={classNames(`${cssPrefix}-info`, className)}
              style={{
                ...style,
                top,
                marginLeft: `${(width / 2) * -1}px`,
                width: `${width}px`,
              }}
            >
              <div className={`${cssPrefix}-title`}>
                <div className={`${cssPrefix}-title-info`}>{title}</div>
                <div
                  className={`${cssPrefix}-title-close`}
                  onClick={() => !loading && onClose()}
                >
                  ×
                </div>
              </div>
              <div className={`${cssPrefix}-body`}>{children}</div>
              {footer ? (
                footer
              ) : (
                <div
                  className={`${cssPrefix}-footer`}
                  style={{ textAlign: footerAlign }}
                >
                  {cancelText && (
                    <Button
                      type="default"
                      onClick={() => !loading && onClose()}
                    >
                      {cancelText}
                    </Button>
                  )}
                  {okText && (
                    <Button
                      onClick={() => !loading && onOk()}
                      loading={loading}
                    >
                      {okText}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </CSSTransition>
      </div>
    </div>,
    layoutDom,
  );
};

export default Modal;
