import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Dispatch, RefObject, SetStateAction } from 'react';

import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType, ErrorType } from '@types';

type GuestUpdateRequest = components['schemas']['GuestUpdateRequest'];
const patchGuestNickname = async (
  guestId: number,
  guestNickname: string
): Promise<GuestUpdateRequest | null> => {
  try {
    const response = await patch<ApiResponseType<GuestUpdateRequest>>(`/v2/guest/${guestId}`, {
      guestNickname,
    });

    return response.data.data;
  } catch (err) {
    console.error('API error:', err);
    throw err;
  }
};

export const usePatchGuestNickname = (
  guestId: number,
  setIsNicknameDuplicate: Dispatch<SetStateAction<boolean>>,
  nicknameRef: RefObject<HTMLInputElement>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (guestNickname: string) => patchGuestNickname(guestId, guestNickname),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GUEST_INFO] });
    },
    onError: (error: AxiosError<ErrorType>) => {
      if (error.response?.data.status === 40008) {
        setIsNicknameDuplicate(true);
        nicknameRef.current?.focus();
      } else {
        alert(error.message);
      }
    },
  });
};
