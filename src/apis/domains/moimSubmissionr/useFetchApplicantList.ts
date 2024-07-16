import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';
import { components } from '@schema';

type MoimSubmissionByMoimResponse = components['schemas']['MoimSubmissionByMoimResponse'];

const getApplicantList = async (moimId: number): Promise<MoimSubmissionByMoimResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimSubmissionByMoimResponse>>(
      `/moim/${moimId}/submitter-list`
    );

    console.log('서버데이터',response.data); // 추가: API 응답 로그
    return response.data.data;
    
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchApplicantList = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.APPLICANT_LIST],
    queryFn: () => getApplicantList(moimId),
  });
};
