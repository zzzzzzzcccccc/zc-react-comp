import React, { FC } from 'react';
import './index.less';
interface MaskProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Mask: FC<MaskProps>;
export default Mask;
