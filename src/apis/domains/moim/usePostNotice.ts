import { get } from '@apis/api';
import { useMutation } from '@tanstack/react-query';

const postNotice = async (moimId: number) => {
  const response = await get(`/moim/${moimId}/notice`);
  if (!response) {
    return null;
  }
  return response.data;
};

export const usePostNotice = (moimId: number) => {
  return useMutation({
    mutationFn: () => postNotice(moimId),
    onSuccess: () => {
      /**@정안TODO 여기다가 presigned url 추가? */
      console.log('success');
    },
  });
};
