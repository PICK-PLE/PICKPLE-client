import { useMutation, useQueryClient } from '@tanstack/react-query';

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

    console.log('API response:', response); // 응답 전체를 확인
    console.log('response.data:', response.data); // data 부분을 확인
    console.log('response.data.data:', response.data.data); // 기대하는 데이터를 확인

    return response.data.data || null; // data가 없는 경우 null 반환
  } catch (err) {
    console.error('API error:', err); // 에러 확인
    throw err;
  }
};

export const usePatchGuestNickname = (guestId: number, setErrorMessage: (msg: string) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (guestNickname: string) => patchGuestNickname(guestId, guestNickname),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GUEST_INFO] });
    },
    onError: (error: ErrorType) => {
      if (error.status === 40008) {
        setErrorMessage('* 이미 존재하는 닉네임이에요.');
      } else {
        setErrorMessage('닉네임 변경 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    },
  });
};
