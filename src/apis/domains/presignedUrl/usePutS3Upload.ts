import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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

    console.log('presigned Put response.data', response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePutS3Upload = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ url, file }: PutImageUploadParams) => putImageUpload({ url, file }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRE_SIGNED_URL] });
    },
  });
};
