import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';

export type CommentGetResponse = components['schemas']['CommentGetResponse'];

const getCommentList = async (noticeId: string): Promise<CommentGetResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<CommentGetResponse[]>>(
      `/v2/notice/${noticeId}/comment-list`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchCommentList = (noticeId: string) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.COMMENT_LIST, noticeId],
    queryFn: () => getCommentList(noticeId),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
