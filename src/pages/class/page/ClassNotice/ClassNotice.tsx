import { Button, Header, ImageSelect, Input, TextArea } from '@components';
import {
  imageSelectWrapper,
  noticePostBackground,
  noticePostLayout,
  noticePostMain,
} from './ClassNotice.style';
import { useState, useEffect } from 'react';
import { usePutS3Upload } from '@apis/domains/presignedUrl/usePutS3Upload';
import { usePostNotice } from '@apis/domains/notice';
import { handleUpload } from 'src/utils/imageUpload';

const ClassNotice = () => {
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const putS3UploadMutation = usePutS3Upload();
  const postNoticeMutation = usePostNotice();

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

  const handleUploadClick = async (): Promise<void> => {
    const imageUrlList = await handleUpload({
      selectedFiles,
      putS3Upload: putS3UploadMutation.mutateAsync,
      type: 'notice',
    });

    const params = {
      noticeTitle,
      noticeContent,
      imageUrl: imageUrlList[0],
    };

    const moimId = 1; //정안TODO 실제 모임ID로 변경
    await postNoticeMutation.mutateAsync({ params, moimId });
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
          onClick={() => handleUploadClick()}>
          게시하기
        </Button>
      </div>
    </div>
  );
};

export default ClassNotice;
