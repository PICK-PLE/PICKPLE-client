import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

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
import { useClassPostInputChange, useClassPostInputValidation } from '@pages/class/hooks';
import { smoothScroll } from '@utils';
import AccountNumberInput from 'src/components/common/inputs/AccountNumberInput/AccountNumberInput';
import { options } from 'src/constants/options';
import { ClassPostDataType } from 'src/stores/types/classPostDataType';
import { StepProps } from 'src/types/nextStep';

import {
  footerStyle,
  headerStyle,
  layoutStyle,
  mainStyle,
  preventDragStyle,
  referTextStyle,
  sectionStyle,
  subTitleStyle,
  titleStyle,
} from './StepOne.style';
import AddAmountBox from '../AddAmountBox/AddAmountBox';

const StepOne = ({ onNext }: StepProps) => {
  const {
    classPostState,
    handleInputChange,
    handleCategoryChange,
    toggleIsOffline,
    handleMaxGuestChange,
    handleAmountChange,
    handleSelectChange,
    handleAccountChange,
    handleDateChange,
  } = useClassPostInputChange();
  const { validateStepOne } = useClassPostInputValidation();
  const [selectedCategories, setSelectedCategories] = useState(classPostState.categoryList);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    classPostState.date ? dayjs(classPostState.date.replace(/\./g, '-')) : null
  );
  const [startTime, setStartTime] = useState<number | null>(
    classPostState.startTime ? parseInt(classPostState.startTime) : null
  );
  const [endTime, setEndTime] = useState<number | null>(
    classPostState.endTime ? parseInt(classPostState.endTime) : null
  );

  const validatationResult = validateStepOne(classPostState);

  const handleUpdateCategories = (newCategories: ClassPostDataType['categoryList']) => {
    setSelectedCategories(newCategories);
    handleCategoryChange(newCategories);
  };

  const handleNextClick = () => {
    if (validatationResult.isAllValid) {
      onNext();
      smoothScroll(0);
    }
  };

  const handleDateChangeWrapper = (date: Dayjs | null) => {
    setSelectedDate(date);
    handleDateChange(date);
  };

  const handleStartTimeChange = (time: number) => {
    setStartTime(time);
    handleInputChange(
      {
        target: { value: `${time.toString().padStart(2, '0')}:00` },
      } as React.ChangeEvent<HTMLInputElement>,
      'startTime'
    );
  };

  const handleEndTimeChange = (time: number) => {
    setEndTime(time);
    handleInputChange(
      {
        target: { value: `${time.toString().padStart(2, '0')}:00` },
      } as React.ChangeEvent<HTMLInputElement>,
      'endTime'
    );
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
              selected={classPostState.isOffline ? '오프라인' : '온라인'}
              handleChange={toggleIsOffline}
            />
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q3">어디에서 진행할 예정이신가요?</QuestionText>
            {classPostState.isOffline ? (
              <Input
                value={classPostState.offlineSpot}
                onChange={(e) => handleInputChange(e, 'offlineSpot')}
                placeholder="ex. 00시 00구 00동"
                isValid={true}
                isCountValue={false}
              />
            ) : (
              <Select
                value={classPostState.onlineSpot}
                onChange={handleSelectChange}
                placeholder="사용할 플랫폼을 선택해주세요."
                options={options}></Select>
            )}
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q4">언제 진행할 예정이신가요?</QuestionText>
            <DateSelect selected={selectedDate} onChange={handleDateChangeWrapper} />
            <TimeSelect
              startTime={startTime}
              endTime={endTime}
              onStartTimeChange={handleStartTimeChange}
              onEndTimeChange={handleEndTimeChange}
            />
          </section>
          <section css={sectionStyle(2)}>
            <QuestionText numberLabel="Q5">몇 명의 게스트와 함께하고 싶으신가요?</QuestionText>
            <CountPeople people={classPostState.maxGuest} onPeopleChange={handleMaxGuestChange} />
            <h6 css={[referTextStyle, preventDragStyle]}>
              참가자는 최대 15명까지 모집 가능합니다.
            </h6>
          </section>
          <section css={sectionStyle(1)}>
            <QuestionText numberLabel="Q6">참가비를 알려주세요.</QuestionText>
            <AddAmountBox value={classPostState.fee} handleAmountChange={handleAmountChange} />
          </section>
          <section css={sectionStyle(1.5)}>
            <QuestionText numberLabel="Q7">정산 받을 계좌를 알려주세요.</QuestionText>
            <Input
              value={classPostState.accountList.holder}
              onChange={(e) => handleAccountChange(e, 'holder')}
              placeholder="ex. 홍길동"
              inputLabel="예금주"
              isValid={true}
              isCountValue={false}
            />
            <Input
              value={classPostState.accountList.bank}
              onChange={(e) => handleAccountChange(e, 'bank')}
              placeholder="은행명을 입력해주세요."
              inputLabel="입금 은행"
              isValid={true}
              isCountValue={false}
            />
            <AccountNumberInput
              value={classPostState.accountList.accountNumber}
              onChange={(e) => handleAccountChange(e, 'accountNumber')}
            />
          </section>
        </main>
        <footer css={footerStyle}>
          <Button
            variant="large"
            onClick={handleNextClick}
            disabled={!validatationResult.isAllValid}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default StepOne;
