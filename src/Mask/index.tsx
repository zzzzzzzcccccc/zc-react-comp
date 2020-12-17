import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

interface MaskProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const cssPrefix: string = 'r-zc-mask';
const Mask: FC<MaskProps> = ({ className, style, children, onClick }) => (
  <div
    className={classNames(cssPrefix, className)}
    style={style}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Mask;
