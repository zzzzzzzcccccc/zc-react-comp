import React, { FC, useState } from 'react';
import { SelectBoxProps } from './index';
import classNames from 'classnames';
import './index.less';

const cssPrefix: string = 'r-zc-select-box';
const SelectBox: FC<SelectBoxProps> = ({
  className,
  style,
  children,
  multiple = false,
  disabled = false,
  size = 'normal',
  onChange,
  defaultValue,
}) => {
  const [actualValue, setActualValue] = useState<any>(
    multiple
      ? defaultValue || []
      : defaultValue || defaultValue === 0
      ? defaultValue
      : undefined,
  );

  const updateActualValue = (val: any): void => {
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
          multiple,
          updateActualValue,
        });
      } else {
        return child;
      }
    });
  };

  return (
    <div
      className={classNames(
        cssPrefix,
        disabled && `${cssPrefix}-disabled`,
        `${cssPrefix}-${size}`,
        className,
      )}
      style={style}
    >
      {renderChild()}
    </div>
  );
};

export default SelectBox;
