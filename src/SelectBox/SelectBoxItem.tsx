import React, { FC } from 'react';
import { SelectBoxItemProps } from './index';
import classNames from 'classnames';

const cssPrefix: string = 'r-zc-select-box-item';
const SelectBoxItem: FC<SelectBoxItemProps> = ({
  className,
  style,
  children,
  disabled = false,
  value = undefined,
  actualValue,
  onClick,
  updateActualValue,
  multiple,
}) => {
  const isActive: boolean = multiple
    ? actualValue.indexOf(value) > -1
    : value === actualValue;

  const handleClick = (e: React.MouseEvent): void => {
    if (disabled) {
      return;
    }
    if (multiple) {
      let copyActualValue = [...actualValue];
      copyActualValue = isActive
        ? copyActualValue.filter(v => v !== value)
        : [...copyActualValue, value];
      updateActualValue(copyActualValue);
    } else {
      updateActualValue(value);
    }
    onClick && onClick(value, e);
  };

  return (
    <div
      className={classNames(
        cssPrefix,
        disabled && `${cssPrefix}-disabled`,
        isActive && `${cssPrefix}-active`,
        className,
      )}
      style={style}
      onClick={handleClick}
    >
      <span className={`${cssPrefix}-info`}>{children}</span>
      <div style={{ display: isActive ? 'block' : 'none' }}>
        <div className={`${cssPrefix}-ok`} />
        <svg
          className={`${cssPrefix}-svg`}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
        >
          <path
            d="M414.340741 810.666667c-14.506667 0-28.254815-6.352593-37.736297-17.351111L133.783704 510.672593c-7.68-8.912593-6.637037-22.376296 2.275555-30.056297 8.912593-7.68 22.376296-6.637037 30.056297 2.275556l242.915555 282.642963c1.896296 2.180741 4.171852 2.465185 5.404445 2.465185 1.232593 0 3.034074-0.379259 4.361481-1.896296L859.022222 249.268148c7.68-9.007407 21.143704-10.05037 30.056297-2.37037 9.007407 7.68 10.05037 21.143704 2.37037 30.056296L451.318519 793.78963c-9.102222 10.714074-22.565926 16.877037-36.788149 16.877037h-0.189629z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectBoxItem;
