import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { DataType } from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion';
import { ClassApplyProps } from '@pages/class/page/ClassApply/ClassApplyRule/ClassApplyRule';

import { ErrorResponse, ErrorType, MutateResponseType } from '@types';

interface PostAnswerRequest {
  moimId: number;
  body: DataType;
}

const postAnswerList = async ({
  moimId,
  body,
}: PostAnswerRequest): Promise<MutateResponseType | ErrorType> => {
  try {
    const response = await post<MutateResponseType>(`/v1/moim/${moimId}`, body);
    return response.data;
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

      return {
        status: statusCode,
        message: errorMessage,
      };
    } else {
      throw new Error('unknown error');
    }
  }
};

export const usePostAnswerList = ({ handlePageChange }: ClassApplyProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ moimId, body }: PostAnswerRequest) => postAnswerList({ moimId, body }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ANSWER_LIST] });
      if (data.status === 20008) {
        handlePageChange();
      } else {
        alert(data.message);
        navigate(-1);
      }
    },
  });
};
