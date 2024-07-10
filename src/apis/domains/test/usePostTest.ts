import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { QueryClient, useMutation } from '@tanstack/react-query';

const postTest = async () => {
  const response = await post('/test');

  return response;
};

export const usePostTest = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: () => postTest(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TEST] });
    },
  });
};
