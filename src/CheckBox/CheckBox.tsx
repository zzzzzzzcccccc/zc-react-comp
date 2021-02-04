import React, { FC, useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { CheckBoxProps, cssPrefix } from './index';
import { GroupContext } from './CheckboxGroup';
import './check-box.less';

const CheckBox: FC<CheckBoxProps> = ({
  className,
  style,
  checked = false,
  disabled = false,
  children,
  onChange,
  indeterminate = false,
  value,
}) => {
  const groupContext = useContext(GroupContext);
  const [actualChecked, setActualChecked] = useState(
    groupContext ? groupContext.checkedValue.indexOf(value) > -1 : checked,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    groupContext && groupContext.onChecked && groupContext.onChecked(e, value);
    setActualChecked(e.target.checked);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (groupContext && groupContext.checkedValue) {
      setActualChecked(groupContext.checkedValue.indexOf(value) > -1);
    }
  }, [groupContext]);

  useEffect(() => {
    if (!groupContext) {
      setActualChecked(checked);
    }
  }, [checked]);

  return (
    <label
      className={classNames(
        cssPrefix,
        indeterminate && `${cssPrefix}-indeterminate`,
        actualChecked && `${cssPrefix}-active`,
        (disabled || (groupContext && groupContext.disabled)) &&
          `${cssPrefix}-disabled`,
        className,
      )}
      style={style}
    >
      <span className={`${cssPrefix}-info`}>
        <input
          type="checkbox"
          disabled={disabled || (groupContext && groupContext.disabled)}
          checked={actualChecked}
          onChange={handleChange}
        />
      </span>
      {children && <span className={`${cssPrefix}-inner`}>{children}</span>}
    </label>
  );
};

export default CheckBox;
