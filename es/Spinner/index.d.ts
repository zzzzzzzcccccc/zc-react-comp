import React, { FC } from 'react';
import './index.less';
interface SpinnerProps {
    className?: string;
    size?: string | number;
    style?: React.CSSProperties;
    type?: 'line' | 'point';
    color?: string;
    children?: React.ReactNode;
}
declare const Spinner: FC<SpinnerProps>;
export default Spinner;
