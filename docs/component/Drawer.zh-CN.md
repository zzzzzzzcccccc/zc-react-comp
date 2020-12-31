## Drawer

### Left

```tsx
import React, { useState } from 'react';
import { Button, Drawer } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        visible={visible}
        zIndex={1000}
        position="left"
        onClose={() => setVisible(false)}
      >
        <div style={{ width: 1000 }}>Left</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

### Right

```tsx
import React, { useState } from 'react';
import { Button, Drawer } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer visible={visible} zIndex={1000} onClose={() => setVisible(false)}>
        <div style={{ width: 1000 }}>Right</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

### Top

```tsx
import React, { useState } from 'react';
import { Button, Drawer } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        visible={visible}
        zIndex={1000}
        position="top"
        onClose={() => setVisible(false)}
      >
        <div style={{ height: 200 }}>Top</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

### Bottom

```tsx
import React, { useState } from 'react';
import { Button, Drawer } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        visible={visible}
        zIndex={1000}
        position="bottom"
        onClose={() => setVisible(false)}
      >
        <div style={{ height: 200 }}>Bottom</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

### HideMask

```tsx
import React, { useState } from 'react';
import { Button, Drawer } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        visible={visible}
        zIndex={1000}
        onClose={() => setVisible(false)}
        showMask={false}
      >
        <div style={{ width: 500 }}>HideMask</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

### Title

```tsx
import React, { useState } from 'react';
import { Button, Drawer, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        visible={visible}
        zIndex={1000}
        onClose={() => setVisible(false)}
        title="Title"
        onOk={() => Message.show('ok')}
      >
        <div style={{ width: 500 }}>HideMask</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

### LockBody

```tsx
import React, { useState } from 'react';
import { Button, Drawer, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        visible={visible}
        zIndex={1000}
        onClose={() => setVisible(false)}
        title="Title"
        destroyOnClose={false}
        lockBody
        onOk={() => Message.show('ok')}
      >
        <div style={{ width: 500, height: 3000 }}>HideMask</div>
      </Drawer>
      <Button onClick={() => setVisible(true)}>Show Drawer</Button>
    </>
  );
};
```

## API

| 属性           | 说明                                     | 类型                  | 默认值        |
| -------------- | ---------------------------------------- | --------------------- | ------------- |
| layoutDom      | 挂载 dom                                 | HTMLElement           | document.body |
| visible        | 打开关闭                                 | boolean               | false         |
| position       | 打开方位                                 | left/right/top/bottom | right         |
| zIndex         | 层级                                     | number                |               |
| showMask       | 是否显示遮罩                             | boolean               | true          |
| destroyOnClose | 是否销毁 dom                             | boolean               | true          |
| maskClosable   | 是否可以点击遮罩关闭                     | boolean               | true          |
| onClose        | 关闭事件                                 | function              |               |
| title          | 是否显示标题                             | React.ReactNode       |               |
| showCloseIcon  | 是否显示右侧关闭按钮(title 不为空才有效) | boolean               | true          |
| footer         | 底部自定义渲染(title 不为空才有效)       | React.ReactNode       |               |
| footerAlign    | 底部布局(title 不为空才有效)             | left/right/center     | right         |
| okText         | 确认按钮文案                             | string                | 确认          |
| cancelText     | 取消按钮文案                             | string                | 取消          |
| lockBody       | 是否锁住 body                            | boolean               | false         |
| loading        | 按钮是否在加载中                         | boolean               | false         |
| onOk           | 点击确认事件                             | function              |               |
