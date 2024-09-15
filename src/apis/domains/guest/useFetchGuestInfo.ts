import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type GuestGetResponse = components['schemas']['GuestGetResponse'];
const getGuestInfo = async (guestId: string): Promise<GuestGetResponse | null> => {
  try {
    const response = await get<ApiResponseType<GuestGetResponse>>(`/v2/guest/${guestId}`);
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchGuestInfo = (guestId: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.GUEST_INFO],
    queryFn: () => getGuestInfo(guestId),
    enabled: !!guestId,
  });
};
