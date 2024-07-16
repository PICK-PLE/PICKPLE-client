import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';

type MoimSubmissionByMoimResponse = components['schemas']['MoimSubmissionByMoimResponse'];

const getApplicantList = async (moimId: number): Promise<MoimSubmissionByMoimResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimSubmissionByMoimResponse>>(
      `/moim/${moimId}/submitter-list`
    );
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
