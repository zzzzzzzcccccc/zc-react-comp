import React, { FC } from 'react';
import classNames from 'classnames';
import { CollapseItemProps } from './index';

const cssPrefix: string = 'r-zc-collapse-item';
const CollapseItem: FC<CollapseItemProps> = ({
  className,
  style,
  title = '',
  children,
  disabled = false,
  multiple,
  value,
  actualValue,
  updateActualValue,
  onToggle,
}) => {
  const isActive = actualValue.indexOf(value) > -1;

  const handleClickTitle = (e: React.MouseEvent): void => {
    if (disabled) {
      return;
    }
    if (multiple) {
      updateActualValue(
        isActive
          ? [...actualValue].filter(v => v !== value)
          : [...actualValue, value],
      );
    } else {
      updateActualValue(isActive ? [] : [value]);
    }
    onToggle && onToggle(!isActive, value, e);
  };

  return (
    <div
      className={classNames(
        cssPrefix,
        isActive && `${cssPrefix}-active`,
        disabled && `${cssPrefix}-disabled`,
        className,
      )}
      style={style}
    >
      <div className={`${cssPrefix}-header`} onClick={handleClickTitle}>
        <div className={`${cssPrefix}-header-title`}>{title}</div>
      </div>
      <div className={`${cssPrefix}-body`}>{children}</div>
    </div>
  );
};

export default CollapseItem;
