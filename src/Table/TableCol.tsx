import React, { FC } from 'react';
import { TableColProps } from './conf';

const TableCol: FC<TableColProps<object>> = ({ columns }) => {
  return (
    <colgroup>
      {columns.map(item => (
        <col />
      ))}
    </colgroup>
  );
};

export default TableCol;
