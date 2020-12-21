import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';

interface SubTitleProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'line' | 'point';
  shadow?: boolean;
  border?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const cssPrefix: string = 'r-zc-subtitle';
const SubTitle: FC<SubTitleProps> = ({
  className,
  style,
  type = 'line',
  shadow = false,
  border = false,
  children,
  onClick,
}) => {
  return (
    <div
      className={classNames(cssPrefix, className)}
      style={style}
      onClick={onClick}
    >
      <div
        className={classNames(
          `${cssPrefix}-info`,
          type && `${cssPrefix}-${type}`,
          shadow && `${cssPrefix}-shadow`,
        )}
      >
        {children}
      </div>
      {border && <div className={`${cssPrefix}-border`} />}
    </div>
  );
};

export default SubTitle;
