import { post } from '@apis/api';
import { useMutation } from '@tanstack/react-query';
import { ApiResponseType, MutateResponseType } from '@types';

export interface NoticeParams {
  moimId: number;
  noticeTitle: string;
  noticeContent: string;
  imageUrl: string[];
}

const postNotice = async (params: NoticeParams): Promise<MutateResponseType | null> => {
  try {
    const response = await post<ApiResponseType<NoticeParams>>(`/moim/${params.moimId}/notice`, {
      params,
    });

    console.log('response.data.data', response.data.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePostNotice = () => {
  return useMutation({
    mutationFn: (params: NoticeParams) => postNotice(params),
    onSuccess: () => {
      console.log('success');
    },
  });
};
