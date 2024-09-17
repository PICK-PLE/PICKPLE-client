import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type CommentCreateRequest = components['schemas']['CommentCreateRequest'];
const postNoticeComment = async (
  noticeId: string,
  commentContent: string
): Promise<CommentCreateRequest | null> => {
  try {
    const response = await post<ApiResponseType<CommentCreateRequest>>(
      `/v2/notice/${noticeId}/comment`,
      {
        commentContent,
      }
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePostNoticeComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ noticeId, commentContent }: { noticeId: string; commentContent: string }) =>
      postNoticeComment(noticeId, commentContent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENT_LIST] });
    },
  });
};
