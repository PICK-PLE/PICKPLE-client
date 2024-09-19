export const smoothScroll = (top: number, isSmooth: boolean = true): void => {
  window.scrollTo({
    top,
    left: 0,
    behavior: isSmooth ? 'smooth' : 'instant',
  });
};
