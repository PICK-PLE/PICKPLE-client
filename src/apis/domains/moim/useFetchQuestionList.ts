import { useQuery } from '@tanstack/react-query';


import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { ApiResponseType } from '@types';

import { components } from '@schema';


type QuestionInfo = components['schemas']['QuestionInfo'];

const getQuestionList = async (moimId: number): Promise<QuestionInfo | null> => {
  try {
    const response = await get<ApiResponseType<QuestionInfo>>(`/moim/${moimId}/question-list`);
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
