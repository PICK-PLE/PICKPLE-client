import { keepPreviousData, useQuery } from '@tanstack/react-query';


import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { ApiResponseType } from '@types';

import { components } from '@schema';


type SubmittedMoimByGuestResponse = components['schemas']['SubmittedMoimByGuestResponse'];

const getGuestApplyMoim = async (
  guestId: number,
  moimSubmissionState: string
): Promise<SubmittedMoimByGuestResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<SubmittedMoimByGuestResponse[]>>(
      `/guest/${guestId}/submitted-moim-list?moimSubmissionState=${moimSubmissionState}`
    );
    return response.data.data;
  } catch (err) {
    return null;
  }
};

export const useFetchGuestApply = (guestId: number, moimSubmissionState: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.GUEST_APPLY, moimSubmissionState, guestId],
    queryFn: () => getGuestApplyMoim(guestId, moimSubmissionState),
    enabled: !!guestId && guestId > 0,
    placeholderData: keepPreviousData,
  });
};
