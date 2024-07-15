import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { DataType } from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import { QueryClient, useMutation } from '@tanstack/react-query';


const postAnswerList = async ({ moimId, body }: { moimId: number, body: DataType }) => {
  const response = await post(`/moim/${moimId}`, body);

  return response;
};

export const usePostAnswerList = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: postAnswerList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ANSWER_LIST] });
    },
  });
};
