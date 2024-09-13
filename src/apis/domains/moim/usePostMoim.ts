import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { ClassPostDataType } from 'src/stores/types/classPostDataType';
import { transformClassPostState } from 'src/utils/postMoimTypeChange';

import { ApiResponseType, ErrorResponse } from '@types';

interface postMoimResponseType {
  moimId: number;
}

const postMoim = async (classPostState: ClassPostDataType) => {
  const transformedState = transformClassPostState(classPostState);
  try {
    const response = await post<ApiResponseType<postMoimResponseType>>(
      '/v1/moim',
      transformedState
    );
    return response.data.data.moimId;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostMoim = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (classPostState: ClassPostDataType) => postMoim(classPostState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.POST_MOIM] });
    },
  });
};
