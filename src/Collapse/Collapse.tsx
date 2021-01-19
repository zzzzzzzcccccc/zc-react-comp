import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { CollapseProps } from './index';
import './index.less';

const cssPrefix: string = 'r-zc-collapse';
const Collapse: FC<CollapseProps> = ({
  className,
  style,
  defaultValue = undefined,
  children,
  multiple = true,
  onChange,
}) => {
  const [actualValue, setActualValue] = useState<Array<any>>(
    defaultValue || [],
  );

  const updateActualValue = (val: Array<any> = []): void => {
    setActualValue(val);
    onChange && onChange(val);
  };

  const renderChild = (): React.ReactNode => {
    if (!children) {
      return null;
    }
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          actualValue,
          updateActualValue,
          multiple,
        });
      } else {
        return child;
      }
    });
  };

  return (
    <div className={classNames(cssPrefix, className)} style={style}>
      {renderChild()}
    </div>
  );
};

export default Collapse;
