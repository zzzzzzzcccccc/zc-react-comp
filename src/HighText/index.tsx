import React, { FC } from 'react';
import varStyle from '../assets/styles/varStyle';

export interface HighProps {
  children?: string;
  activeColor?: string;
  high?: string;
}

const HighText: FC<HighProps> = ({
  children,
  activeColor = varStyle.dangerColor,
  high = '',
}) => {
  if (!children || typeof children !== 'string') {
    return null;
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: children.replace(
          new RegExp(`(${high})`, 'g'),
          '<span style="color: ' + activeColor + '">$1</span>',
        ),
      }}
    />
  );
};

export default HighText;
