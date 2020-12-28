import React from 'react';
import SelectBox from './SelectBox';
import SelectBoxItem from './SelectBoxItem';

export interface SelectBoxBaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  multiple?: boolean;
  disabled?: boolean;
  activeColor?: string;
}
export interface SelectBoxProps extends SelectBoxBaseProps {
  defaultValue?: any;
  size?: 'normal' | 'small' | 'large';
  onChange?: (value: any) => void;
}
export interface SelectBoxItemProps extends SelectBoxBaseProps {
  value?: any;
  actualValue?: any;
  onClick?: (value: any, e: React.MouseEvent) => void;
  updateActualValue?: (val: any) => void;
}

SelectBox['Item'] = SelectBoxItem;

export default SelectBox;
