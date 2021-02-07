import React, { FC, useRef, useContext, useEffect } from 'react';
import { BaseTableHeaderProps, cssPrefix, ITheadColumn } from './index';
import TableCell from './TableCell';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import { getThProps, BaseTableContext } from './tableUitls'

const TableHeader: FC<BaseTableHeaderProps> = ({
  originColumns,
  genColumns,
  scroll,
  onResize,
  style,
}) => {
  const bodyRef = useRef<HTMLDivElement>();
  const theadRef = useRef<HTMLTableSectionElement>()
  const context = useContext(BaseTableContext);

  const handleResize = (column: ITheadColumn) => (e: React.SyntheticEvent, data: ResizeCallbackData): void => {
    e.stopPropagation();
    if (data.size.width < 20) {
      return;
    }
    let currentIndex: number;
    for (let i = 0; i < genColumns.length; i++) {
      if (genColumns[i].dataIndex === column.dataIndex) {
        currentIndex = i;
        break;
      }
    }
    onResize && onResize(currentIndex, data.size.width);
  };

  useEffect(() => {
    if (theadRef && theadRef.current) {
      context.theadRefCurrent = theadRef.current;
    }
  }, [theadRef, genColumns]);

  useEffect(() => {
    if (bodyRef && bodyRef.current) {
      context.headerRefCurrent = bodyRef.current;
    }
  }, [bodyRef, genColumns]);

  return (
    <div
      className={`${cssPrefix}-header`}
      ref={bodyRef}
      style={{ ...style, ...(scroll && { overflow: `hidden ${scroll.y ? 'scroll' : 'hidden'}` }) }}>
      <table style={{ width: scroll && scroll.x }}>
        <colgroup>
          {genColumns.map((column, columnIndex) => (
            <col
              key={columnIndex}
              style={{ width: column.width, minWidth: column.width }}
            />
          ))}
        </colgroup>
        <thead ref={theadRef}>
          {originColumns.map((columns, columnsIndex) => {
            return (
              <tr key={columnsIndex}>
                {columns.map((column, columnIndex) => {
                  if (
                    (!column.children || column.children.length <= 0) &&
                    column.resize &&
                    column.width &&
                    !column.fixed &&
                    typeof column.width === 'number'
                  ) {
                    return (
                      <Resizable
                        width={column.width}
                        key={columnIndex}
                        onResize={handleResize(column)}
                        draggableOpts={{ enableUserSelectHack: false }}
                        height={0}
                      >
                        <th {...getThProps(column)}>
                          <TableCell column={column}
                                     renderType="header" />
                        </th>
                      </Resizable>
                    );
                  }
                  return (
                    <th key={columnIndex}
                        {...getThProps(column)}>
                      <TableCell column={column}
                                 renderType="header" />
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default TableHeader;
