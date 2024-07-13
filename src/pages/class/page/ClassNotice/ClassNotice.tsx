import { Button, Header, ImageSelect, Input, TextArea } from '@components';
import {
  imageSelectWrapper,
  noticePostBackground,
  noticePostLayout,
  noticePostMain,
} from './ClassNotice.style';
import { useState } from 'react';

const ClassNotice = () => {
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoticeTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoticeContent(e.target.value);
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
          />
          <div css={imageSelectWrapper}>
            <ImageSelect />
          </div>
        </main>
        <Button variant="large">게시하기</Button>
      </div>
    </div>
  );
};

export default ClassNotice;
