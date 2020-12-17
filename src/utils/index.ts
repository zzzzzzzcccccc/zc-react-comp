/**
 * body 是否锁住滚动
 * @param toggle
 */
export const toggleBodyOverflow = (toggle: boolean = true): void => {
  document.body.style.overflow = toggle ? 'hidden' : null;
};
