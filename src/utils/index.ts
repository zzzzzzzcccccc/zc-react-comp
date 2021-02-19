export const toggleBodyOverflow = (toggle: boolean = true): void => {
  document.body.style.overflow = toggle ? 'hidden' : null;
};

export const logError = (str = '') => {
  console.error(str);
};

export const logWarning = (str = '') => {
  console.warn(str);
};

export const isArray = (target: any): boolean => {
  return Object.prototype.toString.call(target) === '[object Array]';
};

export const getScrollbarSize = () => {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  document.body.appendChild(div);

  const scrollBarX = div.offsetWidth - div.clientWidth;
  const scrollBarY = div.offsetHeight - div.clientHeight;
  div.remove();
  return {
    scrollBarX,
    scrollBarY,
  };
};
