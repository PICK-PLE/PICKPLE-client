import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';
import { components } from '@schema';

type MoimSubmitRequest = components['schemas']['MoimSubmitRequest'];

const getSubmitRequest = async ({moimId, submitterId}: {moimId: number, submitterId: number}): Promise<MoimSubmitRequest | null> => {
  try {
    const response = await get<ApiResponseType<MoimSubmitRequest>>(
      `/moim/${moimId}/submitter/${submitterId}`
    );

    console.log('서버데이터',response.data); // 추가: API 응답 로그
    return response.data.data;
    
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchSubmitRequest = ({moimId, submitterId}: {moimId: number, submitterId: number}) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_SUBMIT_REQUEST],
    queryFn: () => getSubmitRequest({moimId, submitterId}),
  });
};
