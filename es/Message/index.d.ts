import React from 'react';
import './index.less';
interface MessageCompProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    top?: string;
    zIndex?: number;
    duration?: number;
    type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
    content?: React.ReactNode;
    list?: Array<MessageCompProps>;
    messageId?: string;
    onEnd?: (messageId: string) => void;
    plain?: boolean;
}
interface IMessage {
    show: (opt?: string | MessageCompProps) => void;
}
declare const Message: IMessage;
export default Message;
