import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';

const getGuestApplyMoim = async (guestId: number, statusMapText: string) => {
  const response = await get(
    `/guest/${guestId}/submitted-moim-list?moimSubmissionState=${statusMapText}`
  );

  if (!response) {
    return null;
  }

  return response.data;
};

export const useFetchGuestApply = (guestId: number, statusMapText: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.GUEST_APPLY],
    queryFn: () => getGuestApplyMoim(guestId, statusMapText),
  });
};
