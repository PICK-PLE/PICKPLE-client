import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

const postTest = async () => {
  const response = await post('/test');

  return response;
};

export const usePostTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => postTest(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TEST] });
    },
  });
};
