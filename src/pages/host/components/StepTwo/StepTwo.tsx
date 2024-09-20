import { useRef, useState } from 'react';

import { usePostHostApply } from '@apis/domains/host';

import { Button, Input, ProgressBar, QuestionText, Spinner, TextArea } from '@components';
import { useHostApplyInputChange, useHostApplyInputValidation } from '@pages/host/hooks';
import { StepProps } from 'src/types/nextStep';

import {
  footerStyle,
  headerStyle,
  layoutStyle,
  mainStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepTwo.style';

const StepTwo = ({ onNext }: StepProps) => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);

  const { hostApplyState, handleInputChange, resetHostApplyState } = useHostApplyInputChange();
  const { validateStepTwo } = useHostApplyInputValidation();

  const { isNicknameValid, isUserKeywordvalid, isPlanValid, isEmailValid, isAllValid } =
    validateStepTwo(hostApplyState);
  const { mutate, isPending } = usePostHostApply(
    resetHostApplyState,
    onNext,
    setIsNicknameDuplicate,
    nicknameRef
  );

  const handleNextClick = () => {
    if (isAllValid) {
      mutate(hostApplyState);
    }
  };

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      <ProgressBar progress={66.6} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>스픽커 신청</h4>
          <h1 css={subTitleStyle}>스픽커님에 대해 알려주세요!</h1>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q4">픽플에서 사용할 닉네임을 작성해 주세요.</QuestionText>
            <Input
              ref={nicknameRef}
              value={hostApplyState.nickname}
              onChange={(e) => {
                setIsNicknameDuplicate((prevState) => (prevState === true ? false : prevState));
                handleInputChange(e, 'nickname');
              }}
              placeholder="ex. 픽픽이 (최대 10자)"
              isValid={!isNicknameDuplicate && isNicknameValid}
              errorMessage={
                isNicknameDuplicate ? '* 이미 존재하는 닉네임이에요.' : '내용을 입력해 주세요.'
              }
              maxLength={10}
              isCountValue={true}
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q5">
              스픽커님을 잘 나타낼 수 있는 키워드를 <br />
              작성해 주세요.
            </QuestionText>
            <Input
              value={hostApplyState.userKeyword}
              onChange={(e) => {
                handleInputChange(e, 'userKeyword');
              }}
              placeholder="ex. 10년차 요리 연구가"
              isValid={isUserKeywordvalid}
              maxLength={20}
              isCountValue={true}
              errorMessage="내용을 입력해 주세요."
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q6">클래스 운영 계획에 대해 이야기해 주세요.</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={'픽플에서 개최하고 싶은 클래스의 주제, 내용 등을 \n작성해 주세요!'}
              value={hostApplyState.plan}
              onChange={(e) => handleInputChange(e, 'plan')}
              isValid={isPlanValid}
              errorMessage="내용을 입력해 주세요."
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q7">
              승인 결과를 전달 받을 메일 주소를 <br />
              입력해 주세요.
            </QuestionText>
            <Input
              value={hostApplyState.email}
              onChange={(e) => handleInputChange(e, 'email')}
              placeholder="ex. pickple@gmail.com"
              isValid={isEmailValid}
              errorMessage="유효한 이메일 주소를 입력해 주세요."
              isCountValue={false}
            />
          </section>
        </main>
        <footer css={footerStyle}>
          <Button variant="large" onClick={handleNextClick} disabled={!isAllValid}>
            스픽커 신청하기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepTwo;
