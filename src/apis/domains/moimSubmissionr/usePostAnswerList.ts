import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { DataType } from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import { QueryClient, useMutation } from '@tanstack/react-query';

const postAnswerList = async ({ moimId, body }: { moimId: number; body: DataType }) => {
  try {
    const response = await post(`/moim/${moimId}`, body);
    return response;
  } catch (error) {
    // console.error('error:', error);
    // return null;
    // if (error) {
    //   const statusCode = error.status;
    //   let errorMessage = 'error occurred';
    //   if (!statusCode) {
    //     errorMessage = 'Network error';
    //   } else if (statusCode == 40007) {
    //     errorMessage = '이미 대기 중인 모임입니다.';
    //   } else if (statusCode === 40403) {
    //     errorMessage = '존재하지 않는 게스트입니다.';
    //   } else if (statusCode === 40404) {
    //     errorMessage = '존재하지 않는 모임입니다.';
    //   }
    //   throw new Error(errorMessage);
    // } else {
    //   throw new Error('unknown error');
    // }
  }
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
