import React, { FC } from 'react';
import config, { TableHeaderProps } from './conf';
import TableCol from './TableCol';
import TableCell from './TableCell';

const cssPrefix: string = config.cssPrefix;
const TableHeader: FC<TableHeaderProps<object>> = ({ columns }) => {
  return (
    <div className={`${cssPrefix}-header`}>
      <table cellPadding={0} cellSpacing={0}>
        <TableCol columns={columns} />
        <thead>
          <tr>
            {columns.map((item, index) => {
              return (
                <th key={index} style={{ textAlign: 'left' }}>
                  <TableCell type="header">{item.title}</TableCell>
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableHeader;
