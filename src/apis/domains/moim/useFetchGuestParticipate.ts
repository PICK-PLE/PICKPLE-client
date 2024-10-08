import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type SubmittedMoimByGuestResponse = components['schemas']['SubmittedMoimByGuestResponse'];
const getGuestParticipateMoim = async (
  guestId: number
): Promise<SubmittedMoimByGuestResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<SubmittedMoimByGuestResponse[]>>(
      `/v2/guest/${guestId}/completed-moim-list`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchGuestParticipate = (guestId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.GUEST_PARTICIPATE, guestId],
    queryFn: () => getGuestParticipateMoim(guestId),
    enabled: !!guestId && guestId > 0,
  });
};
