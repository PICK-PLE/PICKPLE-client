import { StepProps } from 'src/types/nextStep';
import { Button, Input, ProgressBar, QuestionText, TextArea } from '@components';
import {
  footerStyle,
  headerStyle,
  layoutStyle,
  mainStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepOne.style';

const StepOne = ({ onNext }: StepProps) => {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <>
      <ProgressBar progress={33.3} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>호스트 신청</h4>
          <h1 css={subTitleStyle}>호스트님에 대해 알려주세요!</h1>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q1">호스트님은 어떤 분이신가요?</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={`호스트님에 대해 자유롭게 소개해 주세요! \n모임 참여 및 개최 경험 등도 좋아요.`}
              value=""
              onChange={() => {}}
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q2">호스트로 이루고 싶은 목표를 알려주세요!</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={`모임에서 어떤 가치를 공유하고 싶으신가요? \n그 이유는 무엇인가요?`}
              value=""
              onChange={() => {}}
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q3">
              호스트님을 잘 알 수 있는 SNS 혹은 홈페이지 링크를 첨부해 주세요!
            </QuestionText>
            <Input
              value=""
              onChange={() => {}}
              placeholder="URL을 첨부해주세요."
              isValid={true}
              isCountValue={false}
            />
          </section>
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleNextClick}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepOne;