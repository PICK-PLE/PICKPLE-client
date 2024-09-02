import { Button, Input, ProgressBar, QuestionText, TextArea } from '@components';
import { useHostApplyInputChange, useHostApplyInputValidation } from '@pages/host/hooks';
import { smoothScroll } from '@utils';
import { StepProps } from 'src/types/nextStep';

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
  const { hostApplyState, handleInputChange } = useHostApplyInputChange();
  const { validateStepOne } = useHostApplyInputValidation();
  const { isIntroValid, isGoalValid, isLinkValid, isAllValid } = validateStepOne(hostApplyState);

  const handleNextClick = () => {
    if (isAllValid) {
      onNext();
      smoothScroll(0);
    }
  };

  return (
    <>
      <ProgressBar progress={33.3} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>스픽커 신청</h4>
          <h1 css={subTitleStyle}>스픽커님에 대해 알려주세요!</h1>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q1">스픽커님은 어떤 분이신가요?</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={`스픽커님에 대해 자유롭게 소개해 주세요! \n클래스 참여 및 개최 경험 등도 좋아요.`}
              value={hostApplyState.intro}
              onChange={(e) => handleInputChange(e, 'intro')}
              isValid={isIntroValid}
              errorMessage="빈칸을 입력해주세요."
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q2">스픽커가 되고 싶은 이유를 말해주세요!</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={`클래스에서 어떤 가치를 공유하고 싶으신가요? \n그 이유는 무엇인가요?`}
              value={hostApplyState.goal}
              onChange={(e) => handleInputChange(e, 'goal')}
              isValid={isGoalValid}
              errorMessage="빈칸을 입력해주세요."
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q3">
              스픽커님을 잘 알 수 있는 SNS 혹은 <br />
              홈페이지 링크를 첨부해 주세요!
            </QuestionText>
            <Input
              value={hostApplyState.link}
              onChange={(e) => handleInputChange(e, 'link')}
              placeholder="URL을 첨부해주세요."
              isValid={isLinkValid}
              errorMessage="올바른 URL 형식을 입력해주세요"
              isCountValue={false}
            />
          </section>
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleNextClick} disabled={!isAllValid}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepOne;
