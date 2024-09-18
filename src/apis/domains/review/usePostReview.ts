import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@apis/api';

import { components } from '@schema';
import { MutateResponseType } from '@types';

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
    console.error(error);
    return null;
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
