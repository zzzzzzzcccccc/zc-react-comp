## Checkbox

### 基本

```tsx
import React from 'react';
import { CheckBox } from 'zc-react-comp';

export default () => <CheckBox>中文</CheckBox>;
```

### 集合

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, CheckBox } from 'zc-react-comp';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map(item => {
          return (
            <div key={item.id}>
              <CheckBox value={item.id}>{item.name}</CheckBox>
            </div>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### 集体禁用

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, CheckBox } from 'zc-react-comp';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} disabled onChange={setValList}>
        {dataList.map(item => {
          return (
            <div key={item.id}>
              <CheckBox value={item.id}>{item.name}</CheckBox>
            </div>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### 禁用部分

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, CheckBox } from 'zc-react-comp';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2', disabled: true },
    { id: 3, name: '张三3', disabled: true },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map(item => {
          return (
            <div key={item.id}>
              <CheckBox value={item.id} disabled={item.disabled}>
                {item.name}
              </CheckBox>
            </div>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### 行级标签

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, CheckBox } from 'zc-react-comp';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map(item => {
          return (
            <CheckBox key={item.id} value={item.id} disabled={item.disabled}>
              {item.name}
            </CheckBox>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### 级联

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, CheckBox } from 'zc-react-comp';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked: {JSON.stringify(valList)}</div>
      <div>
        <CheckBox
          checked={valList.length === dataList.length}
          onChange={e =>
            setValList(e.target.checked ? dataList.map(v => v.id) : [])
          }
          indeterminate={
            valList.length !== 0 && valList.length < dataList.length
          }
        >
          全选
        </CheckBox>
      </div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map(item => {
          return (
            <CheckBox key={item.id} value={item.id} disabled={item.disabled}>
              {item.name}
            </CheckBox>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```
