import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType, QuestionListType } from '@types';

const getQuestionList = async (moimId: number): Promise<QuestionListType> => {
  const response = await get<ApiResponseType<QuestionListType>>(`/moim/${moimId}/question-list`);

  return response.data.data;
};

export const useFetchQuestionList = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.QUESTION_LIST],
    queryFn: () => getQuestionList(moimId),
    // staleTime: 5000,
    // gcTime: 50000,
  });
};
