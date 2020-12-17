import React, { FC } from 'react';
import config, { TableBodyProps } from './conf';
import TableCell from './TableCell';
import TableCol from './TableCol';

const cssPrefix: string = config.cssPrefix;
const TableBody: FC<TableBodyProps<object>> = ({
  dataSource,
  rowKey,
  columns,
}) => {
  return (
    <div className={`${cssPrefix}-body`}>
      <table cellPadding={0} cellSpacing={0}>
        <TableCol columns={columns} />
        <tbody>
          {dataSource.map((record, rIndex) => {
            return (
              <tr key={rowKey ? record[rowKey] : rIndex}>
                {columns.map(col => {
                  return (
                    <td key={col.dataIndex}>
                      <TableCell>
                        {col.render
                          ? col.render(record[col.dataIndex], record, rIndex)
                          : record[col.dataIndex]}
                      </TableCell>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
