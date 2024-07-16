import { post } from '@apis/api';
import { components } from '@schema';
import { useMutation } from '@tanstack/react-query';

type MutateFunctionProps = {
  params: NoticeCreateRequest;
  moimId: number;
};

type NoticeCreateRequest = components['schemas']['NoticeCreateRequest'];

const postNotice = async (params: NoticeCreateRequest, moimId: number) => {
  try {
    const response = await post(`/moim/${moimId}/notice`, params);

    // console.log('response.data.data', response.data.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const usePostNotice = () => {
  return useMutation({
    mutationFn: ({ params, moimId }: MutateFunctionProps) => postNotice(params, moimId),
    onSuccess: () => {
      console.log('success');
    },
  });
};
