import React, { FC } from 'react';
import './index.less';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  plain?: boolean;
  size?: 'normal' | 'large' | 'small';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onClose?: React.MouseEventHandler<HTMLElement>;
}
declare const Tag: FC<TagProps>;
export default Tag;
