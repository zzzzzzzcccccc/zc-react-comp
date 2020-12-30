## Modal

### Modal

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        title="Title"
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={() => Message.show('Ok!')}
      >
        <div style={{ padding: '20px' }}>Show Modal</div>
      </Modal>
    </>
  );
};
```

### Moving

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        isMove
        title="Title"
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={() => Message.show('Ok!')}
      >
        <div style={{ padding: '20px' }}>Show Modal</div>
      </Modal>
    </>
  );
};
```

### Loading

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        title="Title"
        visible={visible}
        onClose={() => setVisible(false)}
        okText="设置加载"
        onOk={() => setLoading(!loading)}
        loading={loading}
      >
        <div style={{ padding: '20px' }}>
          <Button
            onClick={() => {
              setLoading(false);
              setVisible(false);
            }}
          >
            Close Loading
          </Button>
        </div>
      </Modal>
    </>
  );
};
```

### MoreBlock

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        destroyOnClose
        title="Title"
        width={1000}
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={() => Message.show('Ok!')}
      >
        <div style={{ padding: '20px', height: '2000px' }}>Show Modal</div>
      </Modal>
    </>
  );
};
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| visible | 显示隐藏开关 | boolean | false |
| zIndex | 层级 | number | 1000 |
| width | 弹窗宽度 | 600 | false |
| top | 距离顶部距离 | number | 50 |
| destroyOnClose | 是否销毁dom | boolean | true |
| title | 标题 | React.ReactNode |  |
| okText | 确认按钮文案 | string | 确认 |
| cancelText | 去下按钮文案 | string | 取消 |
| loading | 按钮是否在加载中 | boolean | false | 
| footer | 自定义底部 | React.ReactNode | |
| footerAlign | 底部布局 | left/right/center | right |
| onOk | 点击确认按钮事件 | function | |
| onClose | 点击取消按钮事件 | function | |
| layoutDom | 挂载dom | HTMLElement | document.body |
| isMove | 是否可以移动 | boolean | false |
