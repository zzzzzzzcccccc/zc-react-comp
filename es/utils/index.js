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
  document.body.removeChild(div);
  return {
    scrollBarX: scrollBarX,
    scrollBarY: scrollBarY
  };
};
export var addClass = function addClass(el, name) {
  if (!el || !name) {
    return;
  }

  if (!el.className) {
    el.className = name;
    return;
  }

  el.className = "".concat(el.className, " ").concat(name);
};
export var removeClass = function removeClass(el, name) {
  if (!el || !name) {
    return;
  }

  if (!el.className) {
    return;
  }

  var classNameList = el.className.split(" ").map(function (name) {
    return name;
  }).filter(function (v) {
    return v !== name;
  });
  el.className = classNameList.length <= 0 ? '' : classNameList.join(" ");
};