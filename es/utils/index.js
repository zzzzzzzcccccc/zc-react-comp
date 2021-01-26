/**
 * body 是否锁住滚动
 * @param toggle
 */
export var toggleBodyOverflow = function toggleBodyOverflow() {
  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  document.body.style.overflow = toggle ? 'hidden' : null;
};