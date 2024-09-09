import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiResponseType } from '@types';

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
    console.error(err);
  }
  return null;
};

export const usePatchGuestNickname = (guestId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (guestNickname: string) => patchGuestNickname(guestId, guestNickname),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GUEST_NICKNAME_CHANGE] });
    },
  });
};
