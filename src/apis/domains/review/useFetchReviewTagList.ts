import { useSuspenseQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type TagListResponse = components['schemas']['TagListGetResponse'];

const getTagList = async (): Promise<TagListResponse | null> => {
  try {
    const response = await get<ApiResponseType<TagListResponse>>('/v2/review/tag-list');
    return response.data.data;
  } catch {
    console.log(console.log);
    return null;
  }
};

export const useFetchReviewTagList = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.REVIEW_TAG_LIST],
    queryFn: () => getTagList(),
  });
};
