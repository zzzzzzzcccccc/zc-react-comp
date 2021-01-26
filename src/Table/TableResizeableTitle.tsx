import React, { FC } from 'react';
import { TableResizeableTitleProps } from './index';
import { Resizable } from 'react-resizable';

const TableResizeableTitle: FC<TableResizeableTitleProps> = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={parseFloat(width + '')}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default TableResizeableTitle;
