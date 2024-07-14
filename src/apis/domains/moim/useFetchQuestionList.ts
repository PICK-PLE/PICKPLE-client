import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { AxiosResponse } from 'axios';

const getQuestionList = async (moimId: number) => {
  const response: AxiosResponse = await get(`/moim/${moimId}/question-list`);

  if (!response) {
    return null;
  }
  return response.data;
};

export const useFetchQuestionList = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.QUESTION_LIST],
    queryFn: () => getQuestionList(moimId),
    // staleTime: 5000,
    // gcTime: 50000,
  });
};
