## Table

### Table

```tsx
import React, { useState } from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataList = [
    { id: 1, name: '张三1', age: 11 },
    { id: 2, name: '张三2', age: 12 },
    { id: 3, name: '张三3', age: 13 },
    { id: 4, name: '张三4', age: 14 },
    { id: 5, name: '张三5', age: 15 },
  ];
  const columns = [
    { title: '名字', dataIndex: 'name' },
    { title: '年龄', dataIndex: 'age' },
  ];
  return <Table dataSource={dataList} columns={columns} rowKey="id" />;
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
