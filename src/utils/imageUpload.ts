import { QueryClient, UseMutateAsyncFunction } from '@tanstack/react-query';
import { PutImageUploadParams } from '@apis/domains/presignedUrl/usePutS3Upload';
import { getPresignedUrl } from '@apis/domains/presignedUrl/useFetchPresignedUrl';
import { NoticeParams } from '@apis/domains/notice/usePostNotice';
import { AxiosResponse } from 'axios';

interface UploadParams {
  selectedFiles: File[];
  noticeTitle: string;
  noticeContent: string;
  moimId: number;
  queryClient: QueryClient;
  putS3Upload: (params: PutImageUploadParams) => Promise<void>;
  postNotice: UseMutateAsyncFunction<
    AxiosResponse<unknown, PutImageUploadParams> | null,
    Error,
    NoticeParams,
    unknown
  >;
}

export const handleUpload = async ({
  selectedFiles,
  noticeTitle,
  noticeContent,
  moimId,
  queryClient,
  putS3Upload,
  postNotice,
}: UploadParams) => {
  if (selectedFiles.length > 0) {
    const presignedUrls = await queryClient.fetchQuery({
      queryKey: ['presignedUrl', selectedFiles.length],
      queryFn: () => getPresignedUrl(selectedFiles.length),
    });

    if (presignedUrls && presignedUrls.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const presignedUrl = presignedUrls[i].url;
        const file = selectedFiles[i];
        await putS3Upload({ presignedUrl, file } as PutImageUploadParams);
      }

      await postNotice({
        moimId,
        noticeTitle,
        noticeContent,
        imageUrl: presignedUrls
          .map((url) => `${import.meta.env.VITE_PRESIGNED_URL}/notice/${url}`)
          .join(','),
      });
    }
  }
};
