import { useCallback } from 'react';

const useClipboard = () => {
  const handleCopyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { handleCopyToClipboard };
};

export default useClipboard;
