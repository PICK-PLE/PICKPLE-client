import { useCallback } from 'react';

const useClipboard = () => {
  const handleCopyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { handleCopyToClipboard };
};

export default useClipboard;
