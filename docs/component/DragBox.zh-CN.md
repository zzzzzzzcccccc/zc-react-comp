## DragBox

### Demo

```tsx
import React, { useRef, useEffect } from 'react';
import { DragBox, Button } from 'zc-react-comp';

export default () => {
  const dragRef = useRef();
  const wrapperRef = useRef();
  let dragBox = null;

  const initMove = () => {
    dragBox = new DragBox(dragRef.current, wrapperRef.current);
    dragBox.init();
  };

  const removeMove = () => {
    if (!dragBox) {
      return;
    }
    dragBox.remove();
  };

  useEffect(() => {
    initMove();
    return () => {
      removeMove();
    };
  });

  return (
    <div ref={wrapperRef} style={{ position: 'absolute' }}>
      <div ref={dragRef} style={{ cursor: 'move' }}>
        按住这里可以移动
      </div>
      <div>我是可以移动的</div>
    </div>
  );
};
```

## API

| 属性        | 说明              | 类型        | 默认值 |
| ----------- | ----------------- | ----------- | ------ |
| drag        | 被按住 dom        | HTMLElement |        |
| wrap        | 被移动 dom        | HTMLElement |        |
| isCheckBody | 是否需要超出 body | boolean     | false  |
| init        | 启动移动          | function    |        |
| remove      | 停止移动          | function    |        |
