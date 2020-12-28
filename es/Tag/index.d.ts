import React, { FC } from 'react';
import './index.less';
interface TagProps {
    className?: string;
    style?: React.CSSProperties;
    type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
    plain?: boolean;
    size?: 'normal' | 'large' | 'small';
    children?: React.ReactNode;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onClose?: React.MouseEventHandler<HTMLElement>;
}
declare const Tag: FC<TagProps>;
export default Tag;
