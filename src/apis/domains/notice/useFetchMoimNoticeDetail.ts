import { useSuspenseQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type NoticeDetailGetResponse = components['schemas']['NoticeDetailGetResponse'];

const getMoimNoticeDetail = async (
  moimId: string,
  noticeId: string
): Promise<NoticeDetailGetResponse | null> => {
  try {
    const response = await get<ApiResponseType<NoticeDetailGetResponse>>(
      `/v2/moim/${moimId}/notice/${noticeId}`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchMoimNoticeDetail = (moimId: string, noticeId: string) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.MOIM_NOTICE_DETAIL, moimId, noticeId],
    queryFn: () => getMoimNoticeDetail(moimId, noticeId),
    staleTime: 1000 * 60, // useFetchMoimNoticeList와 staleTime 맞춤
    gcTime: 1000 * 60 * 5, // useFetchMoimNoticeList와 staleTime 맞춤
  });
};
