import React, { FC } from 'react';
import './index.less';
export interface ButtonProps {
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  disabled?: boolean;
  block?: boolean;
  plain?: boolean;
  size?: 'normal' | 'large' | 'small';
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}
declare const Button: FC<ButtonProps>;
export default Button;
