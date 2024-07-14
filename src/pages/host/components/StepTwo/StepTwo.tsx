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

const StepTwo = ({ onNext }: StepProps) => {
  const { hostApplyState, handleInputChange, handleCategoryChange, resetHostApplyState } =
    useHostApplyInputChange();
  const [selectedCategories, setSelectedCategories] = useState(hostApplyState.categoryList);
  const { mutate, isSuccess } = usePostHostApply();

  const handleNextClick = () => {
    mutate(hostApplyState);
  };

  useEffect(() => {
    if (isSuccess) {
      resetHostApplyState();
      onNext();
    }
  }, [isSuccess, onNext, resetHostApplyState]);

  const handleUpdateCategories = (newCategories: {
    category1: string;
    category2: string;
    category3: string;
  }) => {
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
              isValid={true}
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
            <h6 css={referTextStyle}>*최대 3개까지 선택 가능합니다.</h6>
          </section>
          <section css={sectionStyle}>
            <QuestionText numberLabel="Q6">클래스 모임의 운영 계획에 대해 말해주세요.</QuestionText>
            <TextArea
              size="medium"
              maxLength={300}
              placeholder={`픽플에서 개최할 모임의 주제, 운영 방식 등을 작성해 주세요!`}
              value={hostApplyState.plan}
              onChange={(e) => handleInputChange(e, 'plan')}
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

export default StepTwo;
