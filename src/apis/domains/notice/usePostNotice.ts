import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { QueryClient, useMutation } from '@tanstack/react-query';

type MutateFunctionProps = {
  params: NoticeCreateRequest;
  moimId: number;
};

type NoticeCreateRequest = components['schemas']['NoticeCreateRequest'];

const postNotice = async (params: NoticeCreateRequest, moimId: number) => {
  try {
    const response = await post(`/moim/${moimId}/notice`, params);

    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePostNotice = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: ({ params, moimId }: MutateFunctionProps) => postNotice(params, moimId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_NOTICE_LIST] });
    },
  });
};
