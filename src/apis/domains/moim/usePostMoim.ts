import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@types';
import { ClassPostDataType } from 'src/stores/types/classPostDataType';
import { transformClassPostState } from 'src/utils/postMoimTypeChange';

const postMoim = async (classPostState: ClassPostDataType) => {
  const transformedState = transformClassPostState(classPostState);
  try {
    const response = await post('moim', transformedState);
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostMoim = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (classPostState: ClassPostDataType) => postMoim(classPostState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.POST_MOIM] });
    },
  });
};
