import { StepProps } from 'src/types/nextStep';
import { Button, Input, ProgressBar, QuestionText, TextArea } from '@components';
import {
  categorySectionStyle,
  footerStyle,
  headerStyle,
  layoutStyle,
  mainStyle,
  referTextStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepTwo.style';
import CategorySelectBox from 'src/components/common/CategorySelectBox/CategorySelectBox';
import { useHostApplyInputChange } from 'src/hooks/useHostApplyInputChange';
import { useEffect, useState } from 'react';
import { usePostHostApply } from '@apis/domains/host';
import { useHostApplyInputValidation } from 'src/hooks/useHostApplyInputValidation';
import { components } from '@schema';
import { ErrorType } from '@types';

const StepTwo = ({ onNext }: StepProps) => {
  const { hostApplyState, handleInputChange, handleCategoryChange, resetHostApplyState } =
    useHostApplyInputChange();
  const { validateStepTwo } = useHostApplyInputValidation();

  const [selectedCategories, setSelectedCategories] = useState<
    components['schemas']['SubmitterCategoryInfo']
  >(hostApplyState.categoryList || { category1: '', category2: '', category3: '' });

  const { isNicknameValid, isPlanValid, isEmailValid, isAllValid } = validateStepTwo({
    ...hostApplyState,
    categoryList: selectedCategories,
  });
  const { mutate, isSuccess, error } = usePostHostApply();

  const handleNextClick = () => {
    if (isAllValid) {
      mutate(hostApplyState);
    }
  };

  useEffect(() => {
    if (error) {
      const { status, message } = error as ErrorType;
      console.log(status, message);
    } else if (isSuccess) {
      resetHostApplyState();
      onNext();
    }
  }, [error, isSuccess, onNext, resetHostApplyState]);

  const handleUpdateCategories = (
    newCategories: components['schemas']['SubmitterCategoryInfo']
  ) => {
    setSelectedCategories(newCategories);
    handleCategoryChange(newCategories);
  };
  return (
    <>
      <ProgressBar progress={66.6} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>호스트 신청</h4>
          <h1 css={subTitleStyle}>호스트님에 대해 알려주세요!</h1>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q4">픽플에서 사용할 닉네임을 작성해주세요.</QuestionText>
            <Input
              value={hostApplyState.nickname}
              onChange={(e) => handleInputChange(e, 'nickname')}
              placeholder="ex. 픽픽이 (최대 15자)"
              isValid={isNicknameValid}
              errorMessage="닉네임을 입력해 주세요."
              maxLength={10}
              isCountValue={true}
            />
          </section>
          <section css={categorySectionStyle}>
            <QuestionText numberLabel="Q5">
              픽플에서 어떤 주제의 클래스 모임을 진행하고 싶으신가요?
            </QuestionText>
            <CategorySelectBox
              selectedCategories={selectedCategories}
              onUpdateCategories={handleUpdateCategories}
            />
            <h6 css={referTextStyle}>*최소 1개부터 최대 3개까지 선택 가능합니다.</h6>
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q6">클래스 모임의 운영 계획에 대해 말해주세요.</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={`픽플에서 개최할 모임의 주제, 운영 방식 등을 작성해 주세요!`}
              value={hostApplyState.plan}
              onChange={(e) => handleInputChange(e, 'plan')}
              isValid={isPlanValid}
              errorMessage="운영 계획을 입력해 주세요."
            />
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q7">
              승인 결과를 전달 받을 메일 주소를 입력해 주세요.
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
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepTwo;
