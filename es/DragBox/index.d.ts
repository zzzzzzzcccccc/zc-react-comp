export interface IDragBox {
    getCss: (ele: HTMLElement, prop: string) => number;
    onMouseDown: (e: MouseEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: (e: MouseEvent) => void;
    init: () => void;
    remove: () => void;
}
declare class DragBox implements IDragBox {
    drag: HTMLElement;
    wrap: HTMLElement;
    isCheckBody: boolean;
    initX: number;
    initY: number;
    moving: boolean;
    wrapLeft: number;
    wrapTop: number;
    bodyWidth: number;
    bodyHeight: number;
    maxX: number;
    maxY: number;
    constructor(drag: HTMLElement, wrap: HTMLElement, isCheckBody?: boolean);
    getCss: (ele: HTMLElement, prop: string) => number;
    onMouseDown: (e: MouseEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: (e: MouseEvent) => void;
    init: () => void;
    remove: () => void;
}
export default DragBox;
