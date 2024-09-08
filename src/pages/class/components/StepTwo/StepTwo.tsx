import { Button, ProgressBar, QuestionInput } from '@components';
import { useClassPostInputChange, useClassPostInputValidation } from '@pages/class/hooks';
import { smoothScroll } from '@utils';
import { StepProps } from 'src/types/nextStep';

import {
  exampleQuestion,
  exampleQuestions,
  exampleTitle,
  footerStyle,
  headerSpanStyle,
  headerStyle,
  layoutStyle,
  mainStyle,
  questionExampleDivStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepTwo.style';

const StepTwo = ({ onNext }: StepProps) => {
  const { classPostState, handleQuestionChange } = useClassPostInputChange();
  const { validateStepTwo } = useClassPostInputValidation();
  const { isValid } = validateStepTwo(classPostState.questionList);

  const handleNextClick = () => {
    if (isValid) {
      onNext();
      smoothScroll(0);
    }
  };

  return (
    <>
      <ProgressBar progress={50} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>클래스 모임 개설</h4>
          <h1 css={subTitleStyle}>질문을 만들어 주세요</h1>
          <span css={headerSpanStyle}>
            참가자가 해당 질문에 답변할 예정이에요.
            <br />
            질문은 1개 이상 작성해 주세요.
          </span>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <QuestionInput
              numberLabel="Q1"
              maxLength={50}
              value={classPostState.questionList.question1}
              placeholder="질문을 입력하세요."
              onChange={(e) => handleQuestionChange(e, 'question1')}
            />
            <QuestionInput
              numberLabel="Q2"
              maxLength={50}
              value={classPostState.questionList.question2}
              placeholder="(선택) 질문을 입력하세요."
              onChange={(e) => handleQuestionChange(e, 'question2')}
            />
            <QuestionInput
              numberLabel="Q3"
              maxLength={50}
              value={classPostState.questionList.question3}
              placeholder="(선택) 질문을 입력하세요."
              onChange={(e) => handleQuestionChange(e, 'question3')}
            />
          </section>
          <div css={questionExampleDivStyle}>
            <h4 css={exampleTitle}>질문 예시</h4>
            <div css={exampleQuestions}>
              <h6 css={exampleQuestion}>클래스에서 무엇을 이루고 싶으신가요?</h6>
              <h6 css={exampleQuestion}>클래스에서 어떤 것을 배우고 싶으신가요?</h6>
              <h6 css={exampleQuestion}>클래스에서 어떤 경험을 나눌 수 있나요?</h6>
              <h6 css={exampleQuestion}>클래스에서 얻어가고 싶은 것은 무엇인가요?</h6>
            </div>
          </div>
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleNextClick} disabled={!isValid}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepTwo;
