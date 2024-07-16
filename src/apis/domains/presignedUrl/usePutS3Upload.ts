import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export interface PutImageUploadParams {
  url: string;
  file: File;
}

const putImageUpload = async ({ url, file }: PutImageUploadParams) => {
  try {
    const response = await axios.put(url, file, {
      headers: {
        'Content-Type': file.type,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePutS3Upload = () => {
  return useMutation({
    mutationFn: ({ url, file }: PutImageUploadParams) => putImageUpload({ url, file }),
  });
};
