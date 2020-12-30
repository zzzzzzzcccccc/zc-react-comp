import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  plain?: boolean;
  size?: 'normal' | 'large' | 'small';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onClose?: React.MouseEventHandler<HTMLElement>;
}

const cssPrefix: string = 'r-zc-tag';
const Tag: FC<TagProps> = ({
  className,
  style,
  type = 'primary',
  plain = false,
  size = 'normal',
  children,
  onClick,
  onClose,
}) => {
  return (
    <div
      className={classNames(
        cssPrefix,
        `${cssPrefix}${plain ? '-plain' : ''}-${type}`,
        `${cssPrefix}-${size}`,
        className,
      )}
      style={style}
      onClick={onClick}
    >
      <span>{children}</span>
      {onClose && (
        <span className={`${cssPrefix}-close`} onClick={onClose}>
          ×
        </span>
      )}
    </div>
  );
};

export default Tag;
