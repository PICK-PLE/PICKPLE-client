import { useMutation, useQueryClient } from '@tanstack/react-query';

import { del } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

const deleteNotice = async (noticeId: string) => {
  try {
    const response = await del(`/v2/notice/${noticeId}`);

    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (noticeId: string) => deleteNotice(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_NOTICE_LIST] });
    },
  });
};
