import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type QuestionInfo = components['schemas']['QuestionInfo'];

const getQuestionList = async (moimId: number): Promise<QuestionInfo | null> => {
  try {
    const response = await get<ApiResponseType<QuestionInfo>>(`/v1/moim/${moimId}/question-list`);
    return response.data.data;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchQuestionList = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.QUESTION_LIST, moimId],
    queryFn: () => getQuestionList(moimId),
    // staleTime: 5000,
    // gcTime: 50000,
  });
};
