import React, { FC } from 'react';
import classNames from 'classnames';
import { BaseTableProps, cssPrefix } from './index';
import { convertToRows } from './tableUitls';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './index.less';

const BaseTable: FC<BaseTableProps> = ({
  className,
  style,
  columns,
  dataSource,
  size = 'middle',
  rowKey = '',
  scroll,
  bordered = false,
}) => {
  const { originColumns, genColumns } = convertToRows(columns);
  return (
    <div
      className={classNames(
        cssPrefix,
        `${cssPrefix}-${size}`,
        bordered && `${cssPrefix}-bordered`,
        className,
      )}
      style={style}
    >
      <div className={`${cssPrefix}-wrapper`}>
        <div className={`${cssPrefix}-content`}>
          <TableHeader
            originColumns={originColumns}
            scroll={scroll}
            genColumns={genColumns}
          />
          <TableBody
            genColumns={genColumns}
            rowKey={rowKey}
            scroll={scroll}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  );
};

export default BaseTable;
