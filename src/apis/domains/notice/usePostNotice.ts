import { post } from '@apis/api';
import { useMutation } from '@tanstack/react-query';

export interface NoticeParams {
  moimId: number;
  noticeTitle: string;
  noticeContent: string;
  imageUrl: string;
}

const postNotice = async ({ moimId, noticeTitle, noticeContent, imageUrl }: NoticeParams) => {
  try {
    const response = await post(`/moim/${moimId}/notice`, {
      noticeTitle,
      noticeContent,
      imageUrl,
    });

    console.log('response', response);
    return response;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePostNotice = () => {
  return useMutation({
    mutationFn: ({ moimId, noticeTitle, noticeContent, imageUrl }: NoticeParams) =>
      postNotice({ moimId, noticeTitle, noticeContent, imageUrl }),
    onSuccess: () => {
      console.log('success');
    },
  });
};
