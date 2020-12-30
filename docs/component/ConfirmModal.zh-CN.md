## ConfirmModal

### Normal

```tsx
import React from 'react';
import { ConfirmModal, Button } from 'zc-react-comp';

export default () => (
  <Button onClick={() => ConfirmModal.show({ content: 'Confirm Modal' })}>
    Show Confirm Modal
  </Button>
);
```

### Callback

```tsx
import React from 'react';
import { ConfirmModal, Button, Message } from 'zc-react-comp';

export default () => {
  return (
    <Button
      onClick={() =>
        ConfirmModal.show({
          content: 'Confirm Modal',
          onOk: () => Message.show('onOK'),
          onCancel: () => Message.show({ type: 'danger', content: 'onCancel' }),
        })
      }
    >
      Show Confirm Modal
    </Button>
  );
};
```

### Alert

```tsx
import React from 'react';
import { ConfirmModal, Button } from 'zc-react-comp';

export default () => (
  <Button
    onClick={() =>
      ConfirmModal.show({
        content: 'Confirm Modal',
        cancelText: false,
        okText: '我知道了',
      })
    }
  >
    Show Alert Modal
  </Button>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| zIndex | 层级 | number | 1000 |
| top | 局顶部距离 | number/string | 20% |
| width | 弹窗宽度 | number | 360 |
| title | 标题 | React.ReactNode |  |
| content | 弹窗内容 | React.ReactNode |  | 
| okText | 确认按钮文案设为空可隐藏 | string | |
| cancelText | 取消按钮文案设为空可隐藏 | string | |
| onOk | 点击确认按钮事件 | function | |
| onCancel | 点击取消按钮事件 | function | |
| buttonSize | 按钮尺寸（同按钮组件） | string | normal |
