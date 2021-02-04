/**
 * body 是否锁住滚动
 * @param toggle
 */
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
