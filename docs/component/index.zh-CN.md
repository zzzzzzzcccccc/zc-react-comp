## Config

### 国际化

```tsx
import React from 'react';
import { ConfigProvider } from 'zc-react-comp';
import enUS from 'zc-react-comp/es/Local/en_Us';

export default () => {
  return (
    <ConfigProvider local={enUS}>
      <div />
    </ConfigProvider>
  );
};
```

## API

| 属性  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| local | 国际化配置 | ILocal | zh_CN  |
