import { useMutation, useQueryClient } from '@tanstack/react-query';

import { del } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

const deleteNoticeComment = async (noticeId: string, commentId: string) => {
  try {
    const response = await del(`/v2/notice/${noticeId}/comment/${commentId}`);

    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useDeleteNoticeComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ noticeId, commentId }: { noticeId: string; commentId: string }) =>
      deleteNoticeComment(noticeId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENT_LIST] });
    },
  });
};
