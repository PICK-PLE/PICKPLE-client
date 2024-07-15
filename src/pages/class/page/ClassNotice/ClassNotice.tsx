import { Button, Header, ImageSelect, Input, TextArea } from '@components';
import {
  imageSelectWrapper,
  noticePostBackground,
  noticePostLayout,
  noticePostMain,
} from './ClassNotice.style';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { PutImageUploadParams, usePutS3Upload } from '@apis/domains/presignedUrl/usePutS3Upload';
import { getPresignedUrl } from '@apis/domains/presignedUrl/useFetchPresignedUrl';

const ClassNotice = () => {
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const queryClient = useQueryClient();
  const putS3UploadMutation = usePutS3Upload();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoticeTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoticeContent(e.target.value);
  };

  useEffect(() => {
    setIsButtonDisabled(!(noticeTitle.trim() && noticeContent.trim()));
  }, [noticeTitle, noticeContent]);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length > 0) {
      // presigned URL 요청
      const presignedUrls = await queryClient.fetchQuery({
        queryKey: ['presignedUrl', selectedFiles.length],
        queryFn: () => getPresignedUrl(1),
      });

      if (presignedUrls && presignedUrls.length > 0) {
        const presignedUrl = presignedUrls[0].url;
        const file = selectedFiles[0];
        await putS3UploadMutation.mutateAsync({ presignedUrl, file } as PutImageUploadParams);
      }
    }
  };

  return (
    <div css={noticePostBackground}>
      <Header title="공지사항 작성하기" />
      <div css={noticePostLayout}>
        <main css={noticePostMain}>
          <Input
            value={noticeTitle}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요"
            isValid={true}
            maxLength={20}
            isCountValue={true}
          />
          <TextArea
            value={noticeContent}
            onChange={handleContentChange}
            placeholder="내용을 입력해주세요"
            maxLength={500}
            size="medium"
            isValid={true}
          />
          <div css={imageSelectWrapper}>
            <ImageSelect onFileSelect={handleFileSelect} />
          </div>
        </main>

        <Button
          variant="large"
          disabled={isButtonDisabled || selectedFiles.length === 0}
          onClick={handleUpload}>
          게시하기
        </Button>
      </div>
    </div>
  );
};

export default ClassNotice;
