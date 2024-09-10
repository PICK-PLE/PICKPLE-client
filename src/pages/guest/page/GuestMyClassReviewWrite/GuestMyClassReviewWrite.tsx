import { useAtom } from 'jotai';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { usePutS3Upload } from '@apis/domains/presignedUrl';
import { useFetchMoimFromReviewPage } from '@apis/domains/review/useFetchMoimFromReviewPage';
import { useFetchReviewTagList } from '@apis/domains/review/useFetchReviewTagList';
import { usePostReview } from '@apis/domains/review/usePostReview';

import { Button, Header, ImageSelect, Spinner, TextArea } from '@components';
import { ClassListCard } from '@pages/classList/components';
import { handleUpload } from '@utils';
import TagSelectBox from 'src/components/common/TagSelectBox/TagSelectBox';
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

const GuestMyClassReviewWrite = () => {
  const [reviewContent, setReviewContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { moimId } = useParams();

  const { data: moimData } = useFetchMoimFromReviewPage(moimId ?? '');
  const { data: tagList } = useFetchReviewTagList();
  const { mutateAsync: putS3UploadMutateAsync, isPending: putS3IsPending } = usePutS3Upload();
  const { mutateAsync, isPending } = usePostReview();
  const [selectedMoimTags] = useAtom(moimTagsAtom);
  const [selectedHostTags] = useAtom(hostTagsAtom);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewContent(e.target.value);
  };

  const handleButtonClick = async (): Promise<void> => {
    let imageUrl: undefined | string = undefined;
    if (selectedFiles.length === 1) {
      const imageUrlList = await handleUpload({
        selectedFiles,
        putS3Upload: putS3UploadMutateAsync,
        type: 'REVIEW_PREFIX',
      });
      console.log(imageUrlList);

      imageUrl = imageUrlList[0];
    }

    const selectedTags = [...selectedMoimTags, ...selectedHostTags];
    const params = {
      selectedTags,
      reviewContent,
      imageUrl,
    };

    // await mutateAsync(params);

    console.log(params);
  };

  if (putS3IsPending) {
    return <Spinner />;
  }
  return (
    <div css={reviewWriteLayout}>
      <Header title="리뷰 쓰기" />
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
              <span css={bigSpan}>스피커는 어떠셨나요?</span>
              <span css={smallSpan}>최소 1개, 최대 3개</span>
            </div>
            <TagSelectBox tagList={tagList?.hostTag} maxSelection={3} tagType="host" />
          </section>
          <section css={writeReviewSection}>
            <span css={bigSpan}>클래스에 함께한 경험을 공유해 주세요!</span>
            <div css={textareaAndImageWrapper}>
              <TextArea
                size="medium"
                maxLength={500}
                placeholder={'1글자 이상 리뷰를 작성해주세요.'}
                value={reviewContent}
                onChange={handleTextareaChange}
                isValid={true}
                errorMessage="1글자 이상 리뷰를 작성해주세요."
              />
              <ImageSelect isMultiple={false} onFileSelect={setSelectedFiles} maxImageLength={1} />
            </div>
          </section>
        </main>
        <Button variant="large" onClick={handleButtonClick}>
          리뷰 등록하기
        </Button>
      </div>
    </div>
  );
};

export default GuestMyClassReviewWrite;
