import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { usePutS3Upload } from '@apis/domains/presignedUrl';
import { useFetchMoimFromReviewPage } from '@apis/domains/review/useFetchMoimFromReviewPage';
import { useFetchReviewTagList } from '@apis/domains/review/useFetchReviewTagList';
import { usePostReview } from '@apis/domains/review/usePostReview';

import { Button, Header, ImageSelect, Spinner, TagSelectBox, TextArea, Toast } from '@components';
import { useToast } from '@hooks';
import { ClassListCard } from '@pages/classList/components';
import { handleUpload } from '@utils';
import { hostTagsAtom, moimTagsAtom } from 'src/stores/tagList';

import {
  bigSpan,
  mainStyle,
  reviewWriteContainer,
  reviewWriteLayout,
  sectionTitleStyle,
  smallSpan,
  tagSectionStyle,
  textareaAndImageWrapper,
  writeReviewSection,
} from './GuestMyClassReviewWrite.style';

import { MoimIdPathParameterType } from '@types';

const GuestMyClassReviewWrite = () => {
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { moimId } = useParams<MoimIdPathParameterType>();
  const moimIdNumber = Number(moimId);
  const navigate = useNavigate();
  const { showToast, isToastVisible } = useToast();

  const { data: moimData } = useFetchMoimFromReviewPage(moimId ?? '');
  const { data: tagList } = useFetchReviewTagList();
  const { mutateAsync: putS3UploadMutateAsync, isPending: putS3IsPending } = usePutS3Upload();
  const { mutateAsync, isPending } = usePostReview();
  const [selectedMoimTags] = useAtom(moimTagsAtom);
  const [selectedHostTags] = useAtom(hostTagsAtom);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleButtonClick = async (): Promise<void> => {
    let imageUrl: undefined | string = undefined;
    if (selectedFiles.length === 1) {
      const imageUrlList = await handleUpload({
        selectedFiles,
        putS3Upload: putS3UploadMutateAsync,
        type: 'REVIEW_PREFIX',
      });
      imageUrl = imageUrlList[0];
    }

    const tagList = [...selectedMoimTags, ...selectedHostTags];
    const params = {
      tagList,
      content,
      imageUrl,
    };
    try {
      await mutateAsync({ params, moimId: moimIdNumber });
      navigate(`/mypage/guest/myclass/${moimId}/review/complete`);
    } catch (error) {
      showToast();
    }
  };

  const isButtonDisabled = () => {
    return selectedMoimTags.length < 1 || selectedHostTags.length < 1 || content.length < 5;
  };

  if (putS3IsPending || isPending) {
    return <Spinner />;
  }
  return (
    <>
      <div css={reviewWriteLayout}>
        <Header title="리뷰 쓰기" isLine={true} />
        <div css={reviewWriteContainer}>
          {moimData && <ClassListCard classListData={moimData} variant="classList" />}
          <main css={mainStyle}>
            <section css={tagSectionStyle}>
              <div css={sectionTitleStyle}>
                <span css={bigSpan}>클래스는 어떠셨나요?</span>
                <span css={smallSpan}>최소 1개, 최대 3개</span>
              </div>
              <TagSelectBox tagList={tagList?.moimTag} maxSelection={3} tagType="moim" />
            </section>
            <section css={tagSectionStyle}>
              <div css={sectionTitleStyle}>
                <span css={bigSpan}>스픽커는 어떠셨나요?</span>
                <span css={smallSpan}>최소 1개, 최대 3개</span>
              </div>
              <TagSelectBox tagList={tagList?.hostTag} maxSelection={3} tagType="host" />
            </section>
            <section css={writeReviewSection}>
              <span css={bigSpan}>참가자님의 소중한 경험을 공유해 주세요!</span>
              <div css={textareaAndImageWrapper}>
                <TextArea
                  size="medium"
                  maxLength={500}
                  placeholder={'5글자 이상 내용을 작성해 주세요.'}
                  value={content}
                  onChange={handleTextareaChange}
                  isValid={true}
                  errorMessage="5글자 이상 내용을 작성해 주세요."
                />
                <ImageSelect
                  isMultiple={false}
                  onFileSelect={setSelectedFiles}
                  maxImageLength={1}
                />
              </div>
            </section>
          </main>
          <Button variant="large" onClick={handleButtonClick} disabled={isButtonDisabled()}>
            리뷰 등록하기
          </Button>
        </div>
      </div>
      <Toast isVisible={isToastVisible} toastBottom={3} toastIcon={true}>
        이미 리뷰를 작성한 클래스예요
      </Toast>
    </>
  );
};

export default GuestMyClassReviewWrite;
