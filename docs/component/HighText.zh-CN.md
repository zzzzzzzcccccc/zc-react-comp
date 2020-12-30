## HighText

### SearchHigh

```tsx
import React from 'react';
import { HighText } from 'zc-react-comp';

export default () => <HighText high="string">This string is string</HighText>;
```

### ActiveColor

```tsx
import React from 'react';
import { HighText } from 'zc-react-comp';

export default () => (
  <HighText high="string" activeColor="#999">
    This string is string
  </HighText>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| activeColor | 高亮文案颜色 | string | #f50f50 |
| high | 高亮文案关键字 | string |  |
