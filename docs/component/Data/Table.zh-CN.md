## Table

### 基础
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [
    { id: 1, name: '张三1', sex: '男', address: 'address1' },
    { id: 2, name: '张三2', sex: '男', address: 'address2' },
    { id: 3, name: '张三3', sex: '男', address: 'address3' },
    { id: 4, name: '张三4', sex: '男', address: 'address4' }
  ];
  return(
    <Table dataSource={dataSource} columns={columns} rowKey="id" />
  )
};
```

### 小尺寸
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [
    { id: 1, name: '张三1', sex: '男', address: 'address1' },
    { id: 2, name: '张三2', sex: '男', address: 'address2' },
    { id: 3, name: '张三3', sex: '男', address: 'address3' },
    { id: 4, name: '张三4', sex: '男', address: 'address4' }
  ];
  return(
    <Table dataSource={dataSource} columns={columns} rowKey="id" size="small" />
  )
};
```

### 大尺寸
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [
    { id: 1, name: '张三1', sex: '男', address: 'address1' },
    { id: 2, name: '张三2', sex: '男', address: 'address2' },
    { id: 3, name: '张三3', sex: '男', address: 'address3' },
    { id: 4, name: '张三4', sex: '男', address: 'address4' }
  ];
  return(
    <Table dataSource={dataSource} columns={columns} rowKey="id" size="large" />
  )
};
```

### 带边框
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [
    { id: 1, name: '张三1', sex: '男', address: 'address1' },
    { id: 2, name: '张三2', sex: '男', address: 'address2' },
    { id: 3, name: '张三3', sex: '男', address: 'address3' },
    { id: 4, name: '张三4', sex: '男', address: 'address4' }
  ];
  return(
    <Table dataSource={dataSource} columns={columns} rowKey="id" bordered />
  )
};
```

### 滚动条y
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      id: i,
      name: `张三${i}`,
      sex: '女',
      address: `address${i}`
    })
  }
  return(
    <Table dataSource={dataSource} 
           columns={columns} 
           rowKey="id" 
           scroll={{ y: 260 }}
           bordered />
  )
};
```

### 滚动条x
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [];
  for (let i = 0; i < 5; i++) {
    dataSource.push({
      id: i,
      name: `张三${i}`,
      sex: '女',
      address: `address${i}`
    })
  }
  return(
    <Table dataSource={dataSource} 
           columns={columns} 
           rowKey="id" 
           scroll={{ x: `calc(100% + 200px)` }}
           bordered />
  )
};
```

### 滚动条x + y
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址', dataIndex: 'address' }
  ];
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      id: i,
      name: `张三${i}`,
      sex: '女',
      address: `address${i}`
    })
  }
  return(
    <Table dataSource={dataSource} 
           columns={columns} 
           rowKey="id" 
           scroll={{ x: `calc(100% + 200px)`, y: 300 }}
           bordered />
  )
};
```

### 嵌套
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名',
      children: [
        { title: '姓', dataIndex: 'name1' },
        { title: '名', dataIndex: 'name2' }
      ]
    },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址',
      children: [
        { title: '省', dataIndex: 'address1' },
        { title: '市', dataIndex: 'address2' },
        { title: '区', dataIndex: 'address3' }
      ]
    }
  ];
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      id: i,
      name1: `张${i}`,
      name2: `三${i}`,
      sex: '女',
      address1: `address${i}`,
      address2: `address${i}`,
      address3: `address${i}`
    })
  }
  return(
    <Table dataSource={dataSource} 
           columns={columns} 
           rowKey="id" 
           scroll={{ y: 300, x: `calc(100% + 200px)` }}
           bordered />
  )
};
```

### 表头可拖拽
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '姓名',
      children: [
        { title: '姓', dataIndex: 'name1', width: 100, resize: true },
        { title: '名', dataIndex: 'name2', width: 100, resize: true }
      ]
    },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址',
      children: [
        { title: '省', dataIndex: 'address1', width: 160, resize: true },
        { title: '市', dataIndex: 'address2', width: 160, resize: true },
        { title: '区', dataIndex: 'address3', width: 160, resize: true }
      ]
    }
  ];
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      id: i,
      name1: `张${i}`,
      name2: `三${i}`,
      sex: '女',
      address1: `address${i}`,
      address2: `address${i}`,
      address3: `address${i}`
    })
  }
  return(
    <Table dataSource={dataSource} 
           columns={columns} 
           rowKey="id" 
           scroll={{ y: 300, x: `calc(100% + 200px)` }}
           bordered />
  )
};
```


### 冻结列
```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    { title: '公司', dataIndex: 'company', width: 120, fixed: 'left' },
    { title: '姓名',
      children: [
        { title: '姓', dataIndex: 'name1', width: 160, resize: true },
        { title: '名', dataIndex: 'name2', width: 160, resize: true }
      ]
    },
    { title: '性别', dataIndex: 'sex' },
    { title: '地址',
      children: [
        { title: '省', dataIndex: 'address1', width: 150, resize: true },
        { title: '市', dataIndex: 'address2', width: 150, resize: true },
        { title: '区', dataIndex: 'address3', width: 150, resize: true }
      ]
    },
    { title: '分组', dataIndex: 'group', width: 150, fixed: 'right' }
  ];
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      id: i,
      company: `公司${i}`,
      name1: `张${i}`,
      name2: `三${i}`,
      sex: '女',
      address1: `address${i}`,
      address2: `address${i}`,
      address3: `address${i}`,
      group: `分组${i}`,
    })
  }
  return(
    <Table dataSource={dataSource} 
           columns={columns} 
           rowKey="id" 
           scroll={{ y: 300, x: `calc(100% + 200px)` }}
           bordered />
  )
};
```
