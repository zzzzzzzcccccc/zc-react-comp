## Table

### 基础

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 100 },
    { title: '性别', dataIndex: 'sex', width: 100 },
    { title: '年龄', dataIndex: 'age', width: 100 },
  ];
  return <Table rowKey="id" dataSource={dataSource} columns={columns} />;
};
```

### 表头嵌套

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    {
      title: '基础信息',
      dataIndex: '_basic',
      children: [
        { title: '姓名', dataIndex: 'name', width: 100 },
        { title: '性别', dataIndex: 'sex', width: 100 },
      ],
    },
    { title: '年龄', dataIndex: 'age', width: 100 },
  ];
  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
};
```

### 表头拖动

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'name', width: '150px' },
    { title: '性别', dataIndex: 'sex', width: '200px' },
    { title: '年龄', dataIndex: 'age', width: '100px' },
  ];
  return (
    <Table
      rowKey="id"
      titleResizeable
      bordered
      dataSource={dataSource}
      columns={columns}
    />
  );
};
```
