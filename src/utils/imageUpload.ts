import { QueryClient } from '@tanstack/react-query';
import { PutImageUploadParams } from '@apis/domains/presignedUrl/usePutS3Upload';
import { getPresignedUrl } from '@apis/domains/presignedUrl/useFetchPresignedUrl';

interface UploadParams {
  selectedFiles: File[];
  putS3Upload: (params: PutImageUploadParams) => Promise<void>;
}

export const handleUpload = async ({
  selectedFiles,
  putS3Upload,
}: UploadParams): Promise<string[]> => {
  const queryClient = new QueryClient();
  if (selectedFiles.length > 0) {
    const presignedUrls = await queryClient.fetchQuery({
      queryKey: ['presignedUrl', selectedFiles.length],
      queryFn: () => getPresignedUrl(selectedFiles.length),
    });

    if (presignedUrls && presignedUrls.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const presignedUrl = presignedUrls[i].url;
        const file = selectedFiles[i];
        try {
          const response = await putS3Upload({ presignedUrl, file } as PutImageUploadParams);
          return response;
        } catch (err) {
          console.error(`${file.name}이 업로드에 실패했음`, err);
          return [];
        }
      }
    }
  }
};
