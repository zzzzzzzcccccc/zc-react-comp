export interface IDragBox {
  getCss: (ele: HTMLElement, prop: string) => number;
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseUp: (e: MouseEvent) => void;
  init: () => void;
  remove: () => void;
}

class DragBox implements IDragBox {
  drag: HTMLElement;
  wrap: HTMLElement;
  isCheckBody: boolean;
  initX: number;
  initY: number;
  moving: boolean;
  wrapLeft: number;
  wrapTop: number;
  maxX: number;
  maxY: number;

  constructor(
    drag: HTMLElement,
    wrap: HTMLElement,
    isCheckBody: boolean = false,
  ) {
    const { clientWidth, clientHeight } = document.body;
    this.drag = drag;
    this.wrap = wrap;
    this.isCheckBody = isCheckBody;
    this.initX = 0;
    this.initY = 0;
    this.moving = false;
    this.wrapLeft = this.getCss(this.wrap, 'left');
    this.wrapTop = this.getCss(this.wrap, 'top');
    this.maxX = clientWidth - this.wrap.offsetWidth;
    this.maxY = clientHeight - this.wrap.offsetHeight;
  }

  getCss = (ele: HTMLElement, prop: string): number => {
    return parseInt(global.getComputedStyle(ele)[prop]);
  };

  onMouseDown = (e: MouseEvent): void => {
    this.moving = true;
    this.initX = e.clientX;
    this.initY = e.clientY;
  };

  onMouseMove = (e: MouseEvent): void => {
    if (!this.moving) {
      return;
    }
    let nowX = e.clientX,
      nowY = e.clientY,
      disX = nowX - this.initX,
      disY = nowY - this.initY,
      left = this.wrapLeft + disX,
      top = this.wrapTop + disY;
    this.wrap.style.left =
      left < 0
        ? '0px'
        : !this.isCheckBody
        ? left > this.maxX
          ? this.maxX + 'px'
          : left + 'px'
        : left + 'px';
    this.wrap.style.top =
      top < 0
        ? '0px'
        : !this.isCheckBody
        ? top > this.maxY
          ? this.maxY + 'px'
          : top + 'px'
        : top + 'px';
  };

  onMouseUp = (e: MouseEvent): void => {
    this.moving = false;
    this.wrapLeft = this.getCss(this.wrap, 'left');
    this.wrapTop = this.getCss(this.wrap, 'top');
  };

  init = (): void => {
    this.drag.addEventListener('mousedown', this.onMouseDown, false);
    document.addEventListener('mousemove', this.onMouseMove, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
  };

  remove = (): void => {
    this.drag.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}

export default DragBox;
