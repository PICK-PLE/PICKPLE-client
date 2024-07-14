import { Button, ImageSelect, Input, ProgressBar, TextArea } from '@components';
import { StepProps } from 'src/types/nextStep';
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

const StepThree = ({ onNext }: StepProps) => {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <>
      <ProgressBar progress={75} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>클래스 모임 개설</h4>
          <h1 css={subTitleStyle}>개최할 모임을 소개해주세요</h1>
          <span css={headerSpanStyle}>
            호스트와 클래스 모임을 잘 나타내는
            <br />
            대표 이미지를 업로드해 주세요!
          </span>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <Input
              value=""
              onChange={() => {}}
              placeholder="제목을 입력하세요."
              isValid={true}
              maxLength={28}
              isCountValue={true}
            />
            <TextArea
              size="medium"
              maxLength={2000}
              placeholder={`5글자 이상 답변을 작성해주세요.`}
              value=""
              onChange={() => {}}
            />
          </section>
          <section css={imageSelectSection}>
            <ImageSelect isMultiple={true} />
            <h6 css={referTextStyle}>
              * 첫번째 사진이 썸네일 이미지로 등록되며
              <br />
              &nbsp;최대 3장까지 업로드 가능합니다.
            </h6>
          </section>
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleNextClick}>
            모임 개설하기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepThree;
