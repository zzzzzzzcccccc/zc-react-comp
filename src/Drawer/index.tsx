import React, { FC, useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Mask from '../Mask';
import Button from '../Button';
import LocalConsumer from '../ConfigProvider/LocalConsumer';
import { IGlobal } from '../Local';
import { toggleBodyOverflow } from '../utils';
import './index.less';

type Position = 'left' | 'right' | 'top' | 'bottom';

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

const cssPrefix: string = 'r-zc-drawer';
const Drawer: FC<DrawerProps> = ({
  layoutDom = document.body,
  className,
  style,
  visible = false,
  position = 'right',
  zIndex,
  showMask = true,
  destroyOnClose = true,
  children,
  maskClosable = true,
  onClose,
  title = '',
  showCloseIcon = true,
  footer = '',
  footerAlign = 'right',
  okText,
  cancelText,
  lockBody = false,
  loading = false,
  onOk,
}) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const titleRef = useRef<HTMLDivElement>();
  const footerRef = useRef<HTMLDivElement>();
  const [bodyHeight, setBodyHeight] = useState<number | undefined>(undefined);

  const closeDrawer = (e?: MouseEvent | React.MouseEvent): void => {
    if (loading) {
      return;
    }
    onClose(e);
  };
  const getBodyHeight = (): void => {
    setBodyHeight(
      wrapperRef.current.offsetHeight -
        titleRef.current.offsetHeight -
        footerRef.current.offsetHeight,
    );
  };

  useEffect(() => {
    if (lockBody) {
      toggleBodyOverflow(visible);
    }
    if (title && visible) {
      getBodyHeight();
      window.onresize = getBodyHeight;
    }
    if (!visible) {
      window.onresize = null;
    }
  }, [visible]);

  return ReactDOM.createPortal(
    <LocalConsumer>
      {(local: IGlobal) => {
        return (
          <div
            className={classNames(cssPrefix, className)}
            style={{ display: visible ? 'block' : 'none' }}
          >
            {showMask && visible && (
              <Mask
                style={{ zIndex }}
                onClick={e => maskClosable && closeDrawer(e)}
              />
            )}
            {destroyOnClose && !visible ? null : (
              <CSSTransition
                timeout={400}
                in={visible}
                classNames={`z-drawer-${position}`}
                appear
              >
                <div
                  className={`${cssPrefix}-wrapper`}
                  ref={wrapperRef}
                  style={{ ...style, zIndex, ...getPositionStyle(position) }}
                >
                  {title ? (
                    <>
                      <div
                        className={`${cssPrefix}-wrapper-title`}
                        ref={titleRef}
                      >
                        <div className={`${cssPrefix}-wrapper-title-info`}>
                          {title}
                        </div>
                        {showCloseIcon && (
                          <div
                            className={`${cssPrefix}-wrapper-title-close`}
                            onClick={e => onClose && onClose(e)}
                          >
                            ×
                          </div>
                        )}
                      </div>
                      <div
                        className={`${cssPrefix}-wrapper-body`}
                        style={{ height: bodyHeight }}
                      >
                        {children}
                      </div>
                      <div
                        className={`${cssPrefix}-wrapper-footer`}
                        ref={footerRef}
                        style={{ textAlign: footerAlign }}
                      >
                        {footer ? (
                          footer
                        ) : (
                          <>
                            <Button
                              type="default"
                              onClick={e => closeDrawer(e)}
                            >
                              {cancelText || local.cancel}
                            </Button>
                            <Button onClick={onOk} loading={loading}>
                              {okText || local.ok}
                            </Button>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    children
                  )}
                </div>
              </CSSTransition>
            )}
          </div>
        );
      }}
    </LocalConsumer>,
    layoutDom,
  );
};

const getPositionStyle = (position: Position) => {
  switch (position) {
    case 'left':
      return {
        left: 0,
        top: 0,
        bottom: 0,
      };
    case 'right':
      return {
        top: 0,
        right: 0,
        bottom: 0,
      };
    case 'top':
      return {
        top: 0,
        left: 0,
        right: 0,
      };
    case 'bottom':
      return {
        left: 0,
        right: 0,
        bottom: 0,
      };
    default:
      return {};
  }
};

export default Drawer;
