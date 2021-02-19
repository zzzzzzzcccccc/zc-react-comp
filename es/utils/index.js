/**
 * body 是否锁住滚动
 * @param toggle
 */
export var toggleBodyOverflow = function toggleBodyOverflow() {
  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  document.body.style.overflow = toggle ? 'hidden' : null;
};
export var logError = function logError() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  console.error(str);
};
export var logWarning = function logWarning() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  console.warn(str);
};
export var isArray = function isArray(target) {
  return Object.prototype.toString.call(target) === '[object Array]';
};
export var getScrollbarSize = function getScrollbarSize() {
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  document.body.appendChild(div);
  var scrollBarX = div.offsetWidth - div.clientWidth;
  var scrollBarY = div.offsetHeight - div.clientHeight;
  div.remove();
  return {
    scrollBarX: scrollBarX,
    scrollBarY: scrollBarY
  };
};