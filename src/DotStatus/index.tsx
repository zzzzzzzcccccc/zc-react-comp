import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

export interface DotStatusProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  children?: React.ReactNode;
}

const cssPrefix: string = 'r-zc-dot-status';
const DotStatus: FC<DotStatusProps> = ({
  className,
  style,
  type = 'primary',
  children,
}) => {
  return (
    <span
      className={classNames(className, `${cssPrefix}`, `${cssPrefix}-${type}`)}
      style={style}
    >
      {children}
    </span>
  );
};

export default DotStatus;
