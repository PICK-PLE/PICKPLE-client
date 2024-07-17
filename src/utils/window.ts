export const smoothScroll = (top: number): void => {
  window.scrollTo({
    top,
    left: 0,
    behavior: 'smooth',
  });
};
