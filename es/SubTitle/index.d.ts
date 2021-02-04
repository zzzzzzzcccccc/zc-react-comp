import React, { FC } from 'react';
import './index.less';
export interface SubTitleProps {
    className?: string;
    style?: React.CSSProperties;
    type?: 'line' | 'point';
    shadow?: boolean;
    border?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const SubTitle: FC<SubTitleProps>;
export default SubTitle;
