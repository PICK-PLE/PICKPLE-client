import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { QueryClient, useMutation } from '@tanstack/react-query';

const postAnswerList = async (moimId: number) => {
  const response = await post(`/moim/${moimId}`);

  return response;
};

export const usePostTest = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (moimId: number) => postAnswerList(moimId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ANSWER_LIST] });
    },
  });
};
