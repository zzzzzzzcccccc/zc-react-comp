import React, { FC } from 'react';
import classNames from 'classnames';
import config, { TableProps } from './conf';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './index.less';

const cssPrefix: string = config.cssPrefix;
const Table: FC<TableProps<object>> = ({
  dataSource,
  columns,
  size = 'normal',
  rowKey,
}) => {
  return (
    <div className={classNames(cssPrefix, `${cssPrefix}-${size}`)}>
      <div className={classNames(`${cssPrefix}-info`)}>
        <TableHeader columns={columns} />
        <TableBody dataSource={dataSource} columns={columns} rowKey={rowKey} />
      </div>
    </div>
  );
};

export default Table;
