import React, { FC } from 'react';
import './index.less';
export interface DotStatusProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  children?: React.ReactNode;
}
declare const DotStatus: FC<DotStatusProps>;
export default DotStatus;
