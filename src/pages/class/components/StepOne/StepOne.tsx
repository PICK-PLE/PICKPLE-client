import {
  Button,
  CategorySelectBox,
  CountPeople,
  DateSelect,
  Input,
  ProgressBar,
  QuestionText,
  Select,
  SelectButton,
  TimeSelect,
} from '@components';
import { StepProps } from 'src/types/nextStep';
import {
  footerStyle,
  headerStyle,
  layoutStyle,
  mainStyle,
  referTextStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepOne.style';
import { useState } from 'react';
import AddAmountBox from '../AddAmountBox/AddAmountBox';
import { components } from '@schema';

const StepOne = ({ onNext }: StepProps) => {
  
  const [selectedCategories, setSelectedCategories] = useState<
    components['schemas']['SubmitterCategoryInfo']
  >(hostApplyState.categoryList || { category1: '', category2: '', category3: '' });

  const [people, setPeople] = useState(7);
  const [amountValue, setAmountValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOffline, setIsOffline] = useState(true);
  const handleSelectButtonClick = () => {
    setIsOffline(!isOffline);
  };
  const handleAmountChange = (newAmountValue: number) => {
    setAmountValue(newAmountValue);
  };
  const handlePeopleChange = (newCount: number) => {
    setPeople(newCount);
  };
  const handleNextClick = () => {
    onNext();
  };
  return (
    <>
      <ProgressBar progress={25} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>클래스 모임 개설</h4>
          <h1 css={subTitleStyle}>개최할 모임에 대해 알려주세요!</h1>
        </header>
        <main css={mainStyle}>
          <section css={sectionStyle(2)}>
            <QuestionText numberLabel="Q1">
              어떤 주제의 클래스 모임을 진행할 예정이신가요?
            </QuestionText>
            <CategorySelectBox
              selectedCategories={selectedCategories}
              onUpdateCategories={handleUpdateCategories}
            />
            <h6 css={referTextStyle}>*최대 3개까지 선택 가능합니다.</h6>
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q2">어떤 방식으로 진행할 예정이신가요?</QuestionText>
            <SelectButton
              left="오프라인"
              right="온라인"
              selected={isOffline ? '오프라인' : '온라인'}
              onClick={handleSelectButtonClick}
            />
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q3">어디에서 진행할 예정이신가요?</QuestionText>
            {isOffline ? (
              <Input
                value=""
                onChange={() => {}}
                placeholder="ex. 00시 00구 00동"
                isValid={true}
                isCountValue={false}
              />
            ) : (
              <Select
                placeholder="사용할 플랫폼을 선택해주세요."
                options={[
                  'ZOOM',
                  'Google Meets',
                  'Webex',
                  'Microsoft Teams',
                  'Skype',
                  'Naver Works',
                  'Zep',
                ]}></Select>
            )}
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q4">언제 진행할 예정이신가요?</QuestionText>
            <DateSelect selected={selectedDate} onChange={setSelectedDate} />
            <TimeSelect />
          </section>
          <section css={sectionStyle(2)}>
            <QuestionText numberLabel="Q5">몇 명의 게스트와 함께하고 싶으신가요?</QuestionText>
            <CountPeople people={people} onPeopleChange={handlePeopleChange} />
            <h6 css={referTextStyle}>참가자는 최대 15명까지 모집 가능합니다.</h6>
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q6">참가비를 알려주세요.</QuestionText>
            <AddAmountBox value={amountValue} handleAmountChange={handleAmountChange} />
          </section>
          <section css={sectionStyle(1.5)}>
            <QuestionText numberLabel="Q7">정산 받을 계좌를 알려주세요.</QuestionText>
            <Input
              value=""
              onChange={() => {}}
              placeholder="ex. 홍길동"
              inputLabel="예금주"
              isValid={true}
              isCountValue={false}
            />
            <Input
              value=""
              onChange={() => {}}
              placeholder="은행명을 입력해주세요."
              inputLabel="입금 은행"
              isValid={true}
              isCountValue={false}
            />
            <Input
              value=""
              onChange={() => {}}
              placeholder="'-' 없이 입력"
              inputLabel="계좌 번호"
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
