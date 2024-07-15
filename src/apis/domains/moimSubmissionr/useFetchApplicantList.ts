import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';

export interface ApplicantListType {
  data: {
    maxGuest: number;
    isApprovable: boolean;
    submitterList: {
      submitterId: number;
      nickname: string;
      submitterImageUrl: string;
      submittedDate: string;
    }[];
  };
}

const getApplicantList = async (moimId: number): Promise<ApplicantListType | null> => {
  const response = await get<ApiResponseType<ApplicantListType>>(
    `/api/v1/moim/${moimId}/submitter-list`
  );

  if (!response) {
    return null;
  }

  return response.data.data;
};

export const useFetchApplicantList = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.APPLICANT_LIST],
    queryFn: () => getApplicantList(moimId),
  });
};
