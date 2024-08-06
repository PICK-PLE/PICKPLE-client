import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { useEasyNavigate } from '@hooks';

import { components } from '@schema';
import { MoimIdPathParameterType } from '@types';

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
  const { goBack } = useEasyNavigate();
  const { moimId } = useParams<MoimIdPathParameterType>();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ params, moimId }: MutateFunctionProps) => postNotice(params, moimId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_NOTICE_LIST, moimId] });
      goBack();
    },
  });
};
