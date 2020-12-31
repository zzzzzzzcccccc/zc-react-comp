function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragBox = function DragBox(drag, wrap) {
  var _this = this;

  var isCheckBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _classCallCheck(this, DragBox);

  this.getCss = function (ele, prop) {
    return parseInt(global.getComputedStyle(ele)[prop]);
  };

  this.onMouseDown = function (e) {
    _this.moving = true;
    _this.initX = e.clientX;
    _this.initY = e.clientY;
  };

  this.onMouseMove = function (e) {
    if (!_this.moving) {
      return;
    }

    var nowX = e.clientX,
        nowY = e.clientY,
        disX = nowX - _this.initX,
        disY = nowY - _this.initY,
        left = _this.wrapLeft + disX,
        top = _this.wrapTop + disY;
    _this.wrap.style.left = left < 0 ? '0px' : !_this.isCheckBody ? left > _this.maxX ? _this.maxX + 'px' : left + 'px' : left + 'px';
    _this.wrap.style.top = top < 0 ? '0px' : !_this.isCheckBody ? top > _this.maxY ? _this.maxY + 'px' : top + 'px' : top + 'px';
  };

  this.onMouseUp = function (e) {
    _this.moving = false;
    _this.wrapLeft = _this.getCss(_this.wrap, 'left');
    _this.wrapTop = _this.getCss(_this.wrap, 'top');
  };

  this.init = function () {
    _this.drag.addEventListener('mousedown', _this.onMouseDown, false);

    document.addEventListener('mousemove', _this.onMouseMove, false);
    document.addEventListener('mouseup', _this.onMouseUp, false);
  };

  this.remove = function () {
    _this.drag.removeEventListener('mousedown', _this.onMouseDown);

    document.removeEventListener('mousemove', _this.onMouseMove);
    document.removeEventListener('mouseup', _this.onMouseUp);
  };

  var _document$body = document.body,
      clientWidth = _document$body.clientWidth,
      clientHeight = _document$body.clientHeight;
  this.drag = drag;
  this.wrap = wrap;
  this.isCheckBody = isCheckBody;
  this.initX = 0;
  this.initY = 0;
  this.moving = false;
  this.wrapLeft = this.getCss(this.wrap, 'left');
  this.wrapTop = this.getCss(this.wrap, 'top');
  this.bodyWidth = clientWidth;
  this.bodyHeight = clientHeight;
  this.maxX = clientWidth - this.wrap.offsetWidth;
  this.maxY = clientHeight - this.wrap.offsetHeight;
};

export default DragBox;