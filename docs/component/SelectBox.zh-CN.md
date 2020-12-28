## SelectBox

### 基本用法

```tsx
import React from 'react';
import { SelectBox } from 'zc-react-comp';

export default () => (
  <SelectBox>
    <SelectBox.Item value={'A'}>选项A</SelectBox.Item>
    <SelectBox.Item value={'B'}>选项B</SelectBox.Item>
    <SelectBox.Item value={'C'}>选项C</SelectBox.Item>
    <SelectBox.Item value={'D'}>选项D</SelectBox.Item>
    <SelectBox.Item value={'E'}>选项E</SelectBox.Item>
  </SelectBox>
);
```

### 全局禁用

```tsx
import React from 'react';
import { SelectBox } from 'zc-react-comp';

export default () => (
  <SelectBox disabled>
    <SelectBox.Item value={'A'}>选项A</SelectBox.Item>
    <SelectBox.Item value={'B'}>选项B</SelectBox.Item>
    <SelectBox.Item value={'C'}>选项C</SelectBox.Item>
    <SelectBox.Item value={'D'}>选项D</SelectBox.Item>
    <SelectBox.Item value={'E'}>选项E</SelectBox.Item>
  </SelectBox>
);
```

### 部分禁用

```tsx
import React from 'react';
import { SelectBox } from 'zc-react-comp';

export default () => (
  <SelectBox>
    <SelectBox.Item value={'A'} disabled>
      选项A
    </SelectBox.Item>
    <SelectBox.Item value={'B'}>选项B</SelectBox.Item>
    <SelectBox.Item value={'C'}>选项C</SelectBox.Item>
    <SelectBox.Item value={'D'} disabled>
      选项D
    </SelectBox.Item>
    <SelectBox.Item value={'E'}>选项E</SelectBox.Item>
  </SelectBox>
);
```

### 多选模式

```tsx
import React from 'react';
import { SelectBox } from 'zc-react-comp';

export default () => (
  <SelectBox multiple>
    <SelectBox.Item value={'A'}>选项A</SelectBox.Item>
    <SelectBox.Item value={'B'}>选项B</SelectBox.Item>
    <SelectBox.Item value={'C'}>选项C</SelectBox.Item>
    <SelectBox.Item value={'D'}>选项D</SelectBox.Item>
    <SelectBox.Item value={'E'}>选项E</SelectBox.Item>
  </SelectBox>
);
```

### 默认值

```tsx
import React from 'react';
import { SelectBox } from 'zc-react-comp';

export default () => (
  <SelectBox
    multiple
    defaultValue={['A', 'E']}
    onChange={val => console.log(val)}
  >
    <SelectBox.Item value={'A'}>选项A</SelectBox.Item>
    <SelectBox.Item value={'B'}>选项B</SelectBox.Item>
    <SelectBox.Item value={'C'}>选项C</SelectBox.Item>
    <SelectBox.Item value={'D'}>选项D</SelectBox.Item>
    <SelectBox.Item value={'E'}>选项E</SelectBox.Item>
  </SelectBox>
);
```
