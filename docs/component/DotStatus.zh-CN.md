## DotStatus

### Primary

```tsx
import React from 'react';
import { DotStatus } from 'zc-react-comp';

export default () => (
  <>
    <DotStatus>主要</DotStatus>
  </>
);
```

### Warning

```tsx
import React from 'react';
import { DotStatus } from 'zc-react-comp';

export default () => (
  <>
    <DotStatus type="warning">警告</DotStatus>
  </>
);
```

### Danger

```tsx
import React from 'react';
import { DotStatus } from 'zc-react-comp';

export default () => (
  <>
    <DotStatus type="danger">危险</DotStatus>
  </>
);
```

### Default

```tsx
import React from 'react';
import { DotStatus } from 'zc-react-comp';

export default () => (
  <>
    <DotStatus type="default">默认</DotStatus>
  </>
);
```

### Success

```tsx
import React from 'react';
import { DotStatus } from 'zc-react-comp';

export default () => (
  <>
    <DotStatus type="success">成功</DotStatus>
  </>
);
```

## API

| 属性 | 说明 | 类型                                   | 默认值  |
| ---- | ---- | -------------------------------------- | ------- |
| type | 类型 | primary/warning/danger/default/success | primary |
