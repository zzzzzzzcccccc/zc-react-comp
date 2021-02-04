import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import './index.less';
import varStyle from '../assets/styles/varStyle';

export interface MessageCompProps {
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

interface MessageCompItemProps {
  record?: MessageCompProps;
  onEnd?: (messageId: string) => void;
}

interface IMessage {
  show: (opt?: string | MessageCompProps) => void;
}

const cssPrefix: string = 'r-zc-message';
const MessageComp: FC<MessageCompProps> = ({
  top = '8px',
  zIndex = varStyle.messageZIndex,
  list,
  onEnd,
}) => {
  const [messageList, setMessageList] = useState<Array<MessageCompProps>>(list);

  useEffect(() => {
    setMessageList(list);
  }, [list]);

  return (
    <div className={cssPrefix} style={{ top, zIndex }}>
      <div className={`${cssPrefix}-info`}>
        {messageList.map(item => (
          <MessageCompItem
            data-msg-id={item.messageId}
            onEnd={onEnd}
            key={item.messageId}
            record={item}
          />
        ))}
      </div>
    </div>
  );
};
const MessageCompItem: FC<MessageCompItemProps> = ({ record = {}, onEnd }) => {
  let timer: any;

  const {
    duration,
    messageId,
    type,
    className,
    style,
    content,
    plain,
  } = record;

  const setTimer = (): void => {
    timer = setTimeout(() => onEnd(messageId), duration);
  };
  const removeTimer = (): void => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const onMouseEnter = (e: React.MouseEvent) => removeTimer();
  const onMouseLeave = (e: React.MouseEvent) => setTimer();

  useEffect(() => {
    setTimer();
    return () => {
      removeTimer();
      onEnd(messageId);
    };
  }, []);

  return (
    <div
      className={classNames(
        `${cssPrefix}-info-item`,
        `${cssPrefix}-info${!!plain ? '-plain' : ''}-${type}`,
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-msg-id={messageId}
      style={style}
    >
      <div className={classNames(`${cssPrefix}-info-item-content`)}>
        <span />
        {content}
      </div>
    </div>
  );
};

let div: HTMLElement;
let messageList: Array<MessageCompProps> = [];
const Message: IMessage = {
  show: (opt = '') => {
    if (!div) {
      div = document.createElement('div');
      document.body.appendChild(div);
    }
    let config: MessageCompProps = {};
    if (typeof opt === 'object') {
      config = opt;
      config.type = config.type || 'primary';
      config.duration = config.duration || 3000;
    } else {
      config.type = 'primary';
      config.content = opt;
      config.duration = 3000;
    }
    config.messageId = new Date().getTime() + '';

    messageList = [...messageList, config];

    const handleRemove = (messageId: string) => {
      messageList = messageList.filter(v => v.messageId !== messageId);
      ReactDOM.render(
        <MessageComp list={messageList} onEnd={handleRemove} />,
        div,
      );
    };

    ReactDOM.render(
      <MessageComp list={messageList} onEnd={handleRemove} />,
      div,
    );
  },
};

export default Message;
