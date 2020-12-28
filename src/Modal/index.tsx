import React, { FC, useEffect, useState, useRef } from 'react';
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

const cssPrefix: string = 'r-zc-modal';
const Modal: FC<ModalProps> = ({
  visible,
  className,
  style,
  zIndex = varStyle.modalZIndex,
  width = 600,
  top = 50,
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
  isMove = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [actualLeft, setActualLeft] = useState<number>(0);
  const [actualTop, setActualTop] = useState<number>(0);
  const [moving, setMoving] = useState<boolean>(false);
  const [diffX, setDiffX] = useState<number>(0);
  const [diffY, setDiffY] = useState<number>(0);

  const getPosition = (e: MouseEvent | React.MouseEvent) => {
    const dom = e.target;
    // @ts-ignore
    const { left: X, top: Y } = dom.getBoundingClientRect();
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    const diffX = mouseX - X;
    const diffY = mouseY - Y;
    return { X, Y, mouseX, mouseY, diffX, diffY };
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!moving) {
      return;
    }
    const position = getPosition(e);
    const x = position.mouseX - diffX;
    const y = position.mouseY - diffY;
    const { clientWidth, clientHeight } = document.body;
    const maxHeight = clientHeight - wrapperRef.current.offsetHeight;
    const maxWidth = clientWidth - wrapperRef.current.offsetWidth;
    const left = x > 0 ? (x < maxWidth ? x : maxWidth) : 0;
    const top = y > 0 ? (y < maxHeight ? y : maxHeight) : 0;
    setActualLeft(left);
    setActualTop(top);
  };

  const onMouseUp = () => {
    moving && setMoving(false);
  };

  const handleMouseDown = (e: React.MouseEvent): void => {
    if (!isMove) {
      return;
    }
    const { diffX, diffY } = getPosition(e);
    window.onmousemove = onMouseMove;
    window.onmouseup = onMouseUp;
    setMoving(true);
    setDiffX(diffX);
    setDiffY(diffY);
  };

  const setDefaultLeftTop = (): void => {
    let clientWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    setActualTop(top);
    setActualLeft((clientWidth - width) / 2);
  };

  useEffect(() => {
    toggleBodyOverflow(visible);
    setDefaultLeftTop();
    window.onresize = () => setDefaultLeftTop();
    return () => {
      window.onmousemove = null;
      window.onmouseup = null;
      setMoving(false);
    };
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
              ref={wrapperRef}
              className={classNames(`${cssPrefix}-info`, className)}
              style={{
                ...style,
                top: `${actualTop}px`,
                left: `${actualLeft}px`,
                width: `${width}px`,
              }}
            >
              <div
                className={`${cssPrefix}-title`}
                onMouseDown={handleMouseDown}
                style={{ cursor: moving ? 'all-scroll' : 'auto' }}
              >
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
