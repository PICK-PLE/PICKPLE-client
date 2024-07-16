import { QueryClient } from '@tanstack/react-query';
import { PutImageUploadParams } from '@apis/domains/presignedUrl/usePutS3Upload';
import { getPresignedUrl, PresignedUrlType } from '@apis/domains/presignedUrl/useFetchPresignedUrl';

interface UploadParams {
  selectedFiles: File[];
  putS3Upload: (params: PutImageUploadParams) => Promise<void>;
  type: PresignedUrlType;
}

export const handleUpload = async ({
  selectedFiles, //선택한 파일들 (최대 3개)
  putS3Upload, // usePutS3Upload 함수
  type, // 'notice' || 'moin'
}: UploadParams): Promise<string[]> => {
  const queryClient = new QueryClient();
  const s3UrlList = [];
  if (selectedFiles.length > 0) {
    const presignedUrls = await queryClient.fetchQuery({
      queryKey: ['presignedUrl', selectedFiles.length],
      queryFn: () => getPresignedUrl(selectedFiles.length, type),
    });

    if (presignedUrls && presignedUrls.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const { url } = presignedUrls[i];
        const file = selectedFiles[i];
        const imageUrl = url?.split('?')[0]; //최종 파일 경로
        if (!imageUrl) {
          return [];
        }
        s3UrlList.push(imageUrl);

        try {
          await putS3Upload({ url, file } as PutImageUploadParams);
        } catch (err) {
          console.error(`${file.name}이 업로드에 실패했음`, err);
          return [];
        }
      }
    }
  }
  return s3UrlList;
};
