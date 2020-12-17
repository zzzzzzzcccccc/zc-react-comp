import React, { FC } from 'react';
import classNames from 'classnames';
import config, { TableCellProps } from './conf';

const cssPrefix: string = config.cssPrefix;
const TableCell: FC<TableCellProps<object>> = ({ type = 'body', children }) => {
  return (
    <span
      className={classNames(`${cssPrefix}-cell`, `${cssPrefix}-cell-${type}`)}
    >
      {children}
    </span>
  );
};

export default TableCell;
