import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Dispatch, RefObject, SetStateAction } from 'react';

import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { useEasyNavigate } from '@hooks';

import { components } from '@schema';
import { ErrorResponse, ErrorType, MutateResponseType } from '@types';

type HostApplyRequest = components['schemas']['SubmitterCreateRequest'];

const postHostApply = async (hostApplyState: HostApplyRequest): Promise<MutateResponseType> => {
  // 여긴 사용자와 query/axios 사이의 데이터 타입
  try {
    const response = await post<MutateResponseType>('/v2/submitter', hostApplyState); //여긴 query/axios와 server 사이의 데이터 타입
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostHostApply = (
  resetHostApplyState: () => void,
  onNext: () => void,
  setIsNicknameDuplicate: Dispatch<SetStateAction<boolean>>,
  nicknameRef: RefObject<HTMLInputElement>
) => {
  const queryClient = useQueryClient();
  const { goGuestMyPage } = useEasyNavigate();

  return useMutation({
    mutationFn: (hostApplyState: HostApplyRequest) => postHostApply(hostApplyState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.HOST_APPLY] });
      resetHostApplyState();
      onNext();
    },
    onError: (error: ErrorType) => {
      if (error.status === 40008) {
        setIsNicknameDuplicate(true);
        nicknameRef.current?.focus();
      } else {
        alert(error.message);
        goGuestMyPage();
      }
    },
  });
};
