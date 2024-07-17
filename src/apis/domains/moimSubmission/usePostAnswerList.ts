import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { DataType } from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@types';

interface PostAnswerRequest {
  moimId: number;
  body: DataType;
}

const postAnswerList = async ({ moimId, body }: PostAnswerRequest) => {
  try {
    const response = await post(`/moim/${moimId}`, body);
    return response;
  } catch (error) {
    const err = error as ErrorResponse;
    if (err.response) {
      const statusCode = err.response.data.status;
      let errorMessage = 'error occurred';

      if (statusCode == 40007) {
        errorMessage = '이미 대기 중인 모임입니다.';
      } else if (statusCode === 40403) {
        errorMessage = '존재하지 않는 게스트입니다.';
      } else if (statusCode === 40404) {
        errorMessage = '존재하지 않는 모임입니다.';
      }

      throw new Error(errorMessage);
    } else {
      throw new Error('unknown error');
    }
  }
};

export const usePostAnswerList = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: ({ moimId, body }: PostAnswerRequest) => postAnswerList({ moimId, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ANSWER_LIST] });
    },
  });
};