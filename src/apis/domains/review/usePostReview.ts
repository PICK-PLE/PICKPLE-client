import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@apis/api';

import { components } from '@schema';
import { ErrorResponse, MutateResponseType } from '@types';

type ReviewCreateReqeust = components['schemas']['ReviewCreateReqeust'];

type MutateFunctionProps = {
  params: ReviewCreateReqeust;
  moimId: number;
};
const postReview = async (params: ReviewCreateReqeust, moimId: number) => {
  try {
    const response = await post<MutateResponseType>(`/v2/moim/${moimId}/review`, params);
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ params, moimId }: MutateFunctionProps) => postReview(params, moimId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
      //추후 MOIM_REVIEW_LIST 쿼리키 넣을 예정
    },
  });
};
