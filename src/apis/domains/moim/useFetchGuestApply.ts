import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ApiResponseType, MoimResponseType } from '@types';

const getGuestApplyMoim = async (
  guestId: number,
  moimSubmissionState: string
): Promise<MoimResponseType[] | null> => {
  try {
    const response = await get<ApiResponseType<MoimResponseType[]>>(
      `/guest/${guestId}/submitted-moim-list?moimSubmissionState=${moimSubmissionState}`
    );
    return response.data.data;
  } catch (err) {
    return null;
  }
};

export const useFetchGuestApply = (guestId: number, moimSubmissionState: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.GUEST_APPLY, moimSubmissionState],
    queryFn: () => getGuestApplyMoim(guestId, moimSubmissionState),
    enabled: !!guestId && guestId > 0,
    placeholderData: keepPreviousData,
  });
};
