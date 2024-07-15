import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';

const getGuestParticipateMoim = async (guestId: number) => {
  const response = await get(`/guest/${guestId}/completed-moim-list`);

  if (!response) {
    return null;
  }
  return response;
};

export const useFetchGuestParticipate = (questId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.GUEST_PARTICIPATE],
    queryFn: () => getGuestParticipateMoim(questId),
  });
};
