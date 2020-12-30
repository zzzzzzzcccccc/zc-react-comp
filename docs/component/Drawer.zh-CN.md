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
