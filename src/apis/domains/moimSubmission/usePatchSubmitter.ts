import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { QueryClient, useMutation } from '@tanstack/react-query';

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

export const usePatchSubmitter = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: ({ moimId, submitterIdList }: PatchSubmitterRequest) =>
      patchSubmitter({ moimId, submitterIdList }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_SUBMITTER] });
    },
  });
};
