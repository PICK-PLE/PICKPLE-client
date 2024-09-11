import { QueryClient } from '@tanstack/react-query';

import {
  getPresignedUrl,
  PresignedPrefixType,
} from '@apis/domains/presignedUrl/useFetchPresignedUrl';
import { PutImageUploadParams } from '@apis/domains/presignedUrl/usePutS3Upload';

interface UploadParams {
  selectedFiles: File[];
  putS3Upload: (params: PutImageUploadParams) => Promise<void>;
  type: PresignedPrefixType;
}

export const handleUpload = async ({
  /**@notice
   * PUT할 때 에러가 발생하면 빈 배열을 리턴합니다.
   * S3에는 삭제된 이미지가 어쩔 수 없이 업로드되긴 합니다.
   */

  selectedFiles, //선택한 파일들 (최대 3개)
  putS3Upload, // usePutS3Upload 함수 => react hook은 최상위에서 호출해야하는 규칙 때문에 밖에서 주입되게 하였습니다
  type, // 'PresignedPrefixType' 타입들 참고해서 이 넷 중 하나로 넣으시면 됩니다
}: UploadParams): Promise<string[]> => {
  const queryClient = new QueryClient();
  const s3UrlList = [];
  if (selectedFiles.length > 0) {
    const presignedUrls = await queryClient.fetchQuery({
      queryKey: ['presignedUrl', selectedFiles.length],
      queryFn: () => getPresignedUrl(type, selectedFiles.length),
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
