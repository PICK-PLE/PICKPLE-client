import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { usePostMoim } from '@apis/domains/moim/usePostMoim';
import { usePutS3Upload } from '@apis/domains/presignedUrl/usePutS3Upload';

import { Button, ImageSelect, Input, ProgressBar, Spinner, TextArea } from '@components';
import { useClassPostInputChange, useClassPostInputValidation } from '@pages/class/hooks';
import { smoothScroll } from '@utils';
import { moimIdAtom } from 'src/stores/classPostData';
import { StepProps } from 'src/types/nextStep';
import { handleUpload } from 'src/utils/image';

import {
  footerStyle,
  headerSpanStyle,
  headerStyle,
  imageSelectSection,
  layoutStyle,
  mainStyle,
  referTextStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepThree.style';

import { ErrorType } from '@types';

const StepThree = ({ onNext }: StepProps) => {
  const { classPostState, handleInputChange } = useClassPostInputChange();
  const [, setMoimId] = useAtom(moimIdAtom);
  const { validateStepThree } = useClassPostInputValidation();
  const { isTitleValid, isDescriptionValid } = validateStepThree(classPostState);

  const { mutateAsync: putS3UploadMutateAsync, isPending: putS3IsPending } = usePutS3Upload();
  const { mutateAsync: postMutateAsync, isPending: postIsPending } = usePostMoim();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isAllValid, setIsAllValid] = useState(false);

  useEffect(() => {
    if (isTitleValid && isDescriptionValid && selectedFiles.length > 0) {
      setIsAllValid(true);
    }
  }, [isTitleValid, isDescriptionValid, selectedFiles]);

  const handleNextClick = async (): Promise<void> => {
    if (isAllValid && selectedFiles.length >= 1) {
      const imageUrlList = await handleUpload({
        selectedFiles,
        putS3Upload: putS3UploadMutateAsync,
        type: 'MOIM_PREFIX',
      });

      postMutateAsync({ ...classPostState, imageList: imageUrlList })
        .then((data) => {
          if (data) {
            setMoimId(data);
          }
          onNext();
          smoothScroll(0);
        })
        .catch((error: ErrorType) => {
          const { status, message } = error;
          console.error(status, message);
        });
    }
  };

  if (putS3IsPending || postIsPending) {
    return <Spinner />;
  }

  return (
    <>
      <ProgressBar progress={75} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>클래스 모임 개설</h4>
          <h1 css={subTitleStyle}>개최할 클래스를 소개해 주세요</h1>
          <span css={headerSpanStyle}>
            스픽커님과 클래스를 잘 나타내는
            <br />
            대표 이미지를 업로드해 주세요!
          </span>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <Input
              value={classPostState.title}
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder="제목을 입력해 주세요."
              isValid={isTitleValid}
              errorMessage="제목을 입력해 주세요."
              maxLength={28}
              isCountValue={true}
            />
            <TextArea
              size="medium"
              maxLength={2000}
              placeholder={`5글자 이상 내용을 작성해 주세요.`}
              value={classPostState.description}
              onChange={(e) => handleInputChange(e, 'description')}
              isValid={isDescriptionValid}
              errorMessage="5글자 이상 내용을 작성해 주세요."
            />
          </section>
          <section css={imageSelectSection}>
            <ImageSelect isMultiple={true} onFileSelect={setSelectedFiles} maxImageLength={3} />
            <h6 css={referTextStyle}>
              * 첫번째 사진이 썸네일 이미지로 등록되며
              <br />
              &nbsp;최대 3장까지 업로드 가능합니다.
            </h6>
          </section>
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleNextClick} disabled={!isAllValid}>
            클래스 개설하기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepThree;
