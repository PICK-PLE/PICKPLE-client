import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useEasyNavigate } from '@hooks';
import { components } from '@schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ClassIdPathParameterType } from '@types';
import { useParams } from 'react-router-dom';

type MutateFunctionProps = {
  params: NoticeCreateRequest;
  classId: number;
};

type NoticeCreateRequest = components['schemas']['NoticeCreateRequest'];

const postNotice = async (params: NoticeCreateRequest, classId: number) => {
  try {
    const response = await post(`/moim/${classId}/notice`, params);

    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePostNotice = () => {
  const { goBack } = useEasyNavigate();
  const { classId } = useParams<ClassIdPathParameterType>();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ params, classId }: MutateFunctionProps) => postNotice(params, classId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_NOTICE_LIST, classId] });
      goBack();
    },
  });
};
