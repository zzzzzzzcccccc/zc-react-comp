import React from 'react';
import Collapse from './Collapse';
export interface CollapseBaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  multiple?: boolean;
}
export interface CollapseProps extends CollapseBaseProps {
  defaultValue?: Array<any>;
  onChange?: (val: any) => void;
}
export interface CollapseItemProps extends CollapseBaseProps {
  title?: React.ReactNode;
  value: any;
  actualValue?: any;
  updateActualValue?: (val: any) => void;
  disabled?: boolean;
  onToggle?: (
    collapsed: boolean,
    val: any,
    e: MouseEvent | React.MouseEvent,
  ) => void;
}
export default Collapse;
