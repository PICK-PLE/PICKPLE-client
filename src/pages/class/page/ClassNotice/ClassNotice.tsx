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
import { handleUpload } from 'src/utils/image';
import { useParams } from 'react-router-dom';
import { MoimIdPathParameterType } from '@types';

const ClassNotice = () => {
  const { moimId } = useParams<MoimIdPathParameterType>();
  const moimIdNumber = Number(moimId);

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

  const handleButtonClick = async (): Promise<void> => {
    let imageUrl: undefined | string = undefined;
    if (selectedFiles.length === 1) {
      const imageUrlList = await handleUpload({
        selectedFiles,
        putS3Upload: putS3UploadMutation.mutateAsync,
        type: 'notice',
      });
      imageUrl = imageUrlList[0];
    }
    const params = {
      noticeTitle,
      noticeContent,
      imageUrl,
    };

    await postNoticeMutation.mutateAsync({ params, moimId: moimIdNumber });
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

        <Button variant="large" disabled={isButtonDisabled} onClick={handleButtonClick}>
          게시하기
        </Button>
      </div>
    </div>
  );
};

export default ClassNotice;
