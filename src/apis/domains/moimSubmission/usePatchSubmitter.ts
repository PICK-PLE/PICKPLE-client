
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { userAtom } from '@stores';
import { smoothScroll } from '@utils';

export interface PatchSubmitterRequest {
  moimId: number;
  submitterIdList: number[];
}

const patchSubmitter = async ({ moimId, submitterIdList }: PatchSubmitterRequest) => {
  try {
    const response = await patch(`/moim/${moimId}/submitter`, { submitterIdList });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const usePatchSubmitter = (isOngoing: boolean, onClose: () => void) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [user] = useAtom(userAtom);

  console.log(QUERY_KEY.HOST_MOIM_INFO, user.hostId, isOngoing ? 'ongoing' : 'completed');

  return useMutation({
    mutationFn: ({ moimId, submitterIdList }: PatchSubmitterRequest) =>
      patchSubmitter({ moimId, submitterIdList }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.HOST_MOIM_INFO, user.hostId, isOngoing ? 'ongoing' : 'completed'],
      });
      onClose();
      smoothScroll(0);
      navigate('/host/myclass'); // 다시 모임 관리하는 host 페이지로 이동
    },
  });
};
