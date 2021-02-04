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
