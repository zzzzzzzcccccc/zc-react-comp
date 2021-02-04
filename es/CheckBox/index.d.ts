import React from 'react';
export declare const cssPrefix: string;
export interface CheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
  value?: any;
}
export interface CheckBoxGroupProps {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (value: any[]) => void;
  value?: any[];
}
export interface CheckBoxGroupContext {
  disabled?: boolean;
  checkedValue?: any[];
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>, value: any) => void;
}
