import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType, QuestionListType } from '@types';

const getQuestionList = async (moimId: number): Promise<QuestionListType | null> => {
  try {
    const response = await get<ApiResponseType<QuestionListType>>(`/moim/${moimId}/question-list`);
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
