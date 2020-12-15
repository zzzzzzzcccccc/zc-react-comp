import React, { FC } from 'react';
import classNames from 'classnames';
import varStyle from '../assets/styles/varStyle';
import RoundLine from './item/RoundLine';
import RoundPoint from './item/RoundPoint';
import './index.less';

interface SpinnerProps {
  className?: string;
  size?: string | number;
  style?: React.CSSProperties;
  type?: 'line' | 'point';
  color?: string;
  children?: React.ReactNode;
}

const cssPrefix: string = 'r-zc-spinner';
const Spinner: FC<SpinnerProps> = ({
  className,
  size,
  style,
  type = 'line',
  color = varStyle.primaryColor,
  children,
}) => {
  const filterSvg = (): React.ReactNode => {
    switch (type) {
      case 'line':
        return (
          <RoundLine color={color} style={{ fontSize: size || undefined }} />
        );
      case 'point':
        return (
          <RoundPoint color={color} style={{ fontSize: size || undefined }} />
        );
      default:
        return null;
    }
  };
  return (
    <div className={classNames(cssPrefix, className)} style={style}>
      {filterSvg()}
      {children && <div className={`${cssPrefix}-info`}>{children}</div>}
    </div>
  );
};

export default Spinner;
