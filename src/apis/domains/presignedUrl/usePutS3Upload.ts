import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export interface PutImageUploadParams {
  presignedUrl: string;
  file: File;
}

const putImageUpload = async ({ presignedUrl, file }: PutImageUploadParams) => {
  try {
    const response = await axios.put(presignedUrl, file, {
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
    mutationFn: ({ presignedUrl, file }: PutImageUploadParams) =>
      putImageUpload({ presignedUrl, file }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRE_SIGNED_URL] });
    },
  });
};
