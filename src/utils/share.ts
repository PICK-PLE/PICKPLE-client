export const handleShare = async (
  url: string,
  title: string,
  text: string,
  handleCopyToClipboard: (text: string) => void
) => {
  try {
    await navigator.share({
      title: title,
      url: url,
      text: text,
    });
  } catch (error) {
    console.error('Web Share API를 사용할 수 없습니다.', error);
  }

  if (typeof navigator.share === 'undefined') {
    handleCopyToClipboard(url);
  }
};
