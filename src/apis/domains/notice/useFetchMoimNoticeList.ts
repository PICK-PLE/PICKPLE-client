import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType, MoimNotceType } from '@types';

const getMoimNoticeList = async (moimId: string): Promise<MoimNotceType[] | null> => {
  try {
    const response = await get<ApiResponseType<MoimNotceType[]>>(
      `/moim/${Number(moimId)}/notice-list`
    );
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the notice list:', error);
    return null;
  }
};

export const useFetchMoimNoticeList = (moimId: string, selectTab: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_NOTICE_LIST, moimId],
    queryFn: () => getMoimNoticeList(moimId),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
    enabled: selectTab === '공지사항',
  });
};
