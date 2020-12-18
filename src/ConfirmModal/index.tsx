import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import Mask from '../Mask';
import Button from '../Button';
import './index.less';
import { toggleBodyOverflow } from '../utils';
import varStyle from '../assets/styles/varStyle';

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

const cssPrefix: string = 'r-zc-confirm-modal';
const Modal: FC<ConfirmModalProps> = ({
  zIndex = varStyle.modalZIndex,
  top = '20%',
  width = 360,
  title = '提示',
  content = '',
  style = {},
  className,
  okText = '确认',
  cancelText = '取消',
  buttonSize = 'normal',
  onOk,
  onCancel,
}) => {
  useEffect(() => {
    toggleBodyOverflow();
    return () => {
      toggleBodyOverflow(false);
    };
  }, []);

  return (
    <>
      <Mask style={{ zIndex }} />
      <CSSTransition in timeout={400} classNames="z-modal" appear>
        <div
          className={classNames(cssPrefix, className)}
          style={{
            ...style,
            zIndex,
            width: `${width}px`,
            marginLeft: `${(width / 2) * -1}px`,
            top,
          }}
        >
          <div className={`${cssPrefix}-title`}>{title}</div>
          <div className={`${cssPrefix}-content`}>{content}</div>
          <div className={`${cssPrefix}-footer`}>
            {cancelText && (
              <Button type="default" onClick={onCancel} size={buttonSize}>
                {cancelText}
              </Button>
            )}
            {okText && (
              <Button onClick={onOk} size={buttonSize}>
                {okText}
              </Button>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

interface IConfirmModal {
  show: (opt: ConfirmModalProps) => void;
}

const ConfirmModal: IConfirmModal = {
  show: (opt = {}) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const remove = (): void => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    };

    const onOk = (): void => {
      if (opt.onOk) {
        opt.onOk();
      }
      remove();
    };

    const onCancel = (): void => {
      if (opt.onCancel) {
        opt.onCancel();
      }
      remove();
    };

    ReactDOM.render(<Modal {...opt} onOk={onOk} onCancel={onCancel} />, div);
  },
};

export default ConfirmModal;
