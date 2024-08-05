import { StepProps } from 'src/types/nextStep';
import { Button, Input, ProgressBar, QuestionText, Spinner, TextArea } from '@components';
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
import { useEffect, useState } from 'react';
import { usePostHostApply } from '@apis/domains/host';
import { components } from '@schema';
import { Controller, useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { hostApplyAtom } from '@stores';

const StepTwo = ({ onNext }: StepProps) => {
  const [hostApplyState, setHostApplyState] = useAtom(hostApplyAtom);
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);

  // const [selectedCategories, setSelectedCategories] = useState<
  //   components['schemas']['SubmitterCategoryInfo']
  // >(hostApplyState.categoryList || { category1: '', category2: '', category3: '' });

  const { mutate, isPending } = usePostHostApply(
    // resetHostApplyState,
    onNext,
    setIsNicknameDuplicate
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    setFocus,
  } = useForm({
    defaultValues: hostApplyState,
    mode: 'onBlur',
  });

  const handleUpdateCategories = (
    newCategories: components['schemas']['SubmitterCategoryInfo']
  ) => {
    setValue('categoryList', newCategories, { shouldValidate: true });
    setHostApplyState((prevState) => ({
      ...prevState,
      categoryList: newCategories,
    }));
  };

  useEffect(() => {
    if (isNicknameDuplicate) {
      setFocus('nickname');
    }
  }, [isNicknameDuplicate, setFocus]);

  const onSubmit = (data: components['schemas']['SubmitterCreateRequest']) => {
    if (isValid) {
      setHostApplyState(data);
      mutate(data);
    }
  };

  // const handleUpdateCategories = (
  //   newCategories: components['schemas']['SubmitterCategoryInfo']
  // ) => {
  //   setSelectedCategories(newCategories);
  //   handleCategoryChange(newCategories);
  // };

  if (isPending) {
    return <Spinner />;
  }

  console.log(hostApplyState);

  return (
    <>
      <ProgressBar progress={66.6} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>호스트 신청</h4>
          <h1 css={subTitleStyle}>호스트님에 대해 알려주세요!</h1>
        </header>
        <main css={mainStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section css={sectionStyle}>
              <QuestionText numberLabel="Q4">픽플에서 사용할 닉네임을 작성해주세요.</QuestionText>
              <Controller
                name="nickname"
                control={control}
                rules={{ required: '닉네임을 입력해 주세요.' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="ex. 픽픽이 (최대 15자)"
                    isValid={!isNicknameDuplicate && !errors.nickname}
                    errorMessage={
                      isNicknameDuplicate
                        ? '* 이미 존재하는 닉네임이에요.'
                        : errors.nickname?.message
                    }
                    maxLength={10}
                    isCountValue={true}
                    onChange={(e) => {
                      setIsNicknameDuplicate(false);
                      field.onChange(e);
                      setHostApplyState((prevState) => ({
                        ...prevState,
                        nickname: e.target.value,
                      }));
                    }}
                  />
                )}
              />
            </section>
            <section css={categorySectionStyle}>
              <QuestionText numberLabel="Q5">
                픽플에서 어떤 주제의 클래스 모임을 진행하고 싶으신가요?
              </QuestionText>
              <Controller
                name="categoryList"
                control={control}
                rules={{
                  validate: (value) =>
                    (value && Object.values(value).some(Boolean)) || '카테고리를 선택해 주세요.',
                }}
                render={({ field }) => (
                  <CategorySelectBox
                    selectedCategories={field.value}
                    onUpdateCategories={handleUpdateCategories}
                  />
                )}
              />
              <h6 css={referTextStyle}>*최소 1개부터 최대 3개까지 선택 가능합니다.</h6>
            </section>
            <section css={sectionStyle}>
              <QuestionText numberLabel="Q6">
                클래스 모임의 운영 계획에 대해 말해주세요.
              </QuestionText>
              <Controller
                name="plan"
                control={control}
                rules={{ required: '운영 계획을 입력해 주세요.' }}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    size="medium"
                    maxLength={300}
                    placeholder={`픽플에서 개최할 모임의 주제, 운영 방식 등을 작성해 주세요!`}
                    isValid={!errors.plan}
                    errorMessage={errors.plan?.message}
                  />
                )}
              />
            </section>
            <section css={sectionStyle}>
              <QuestionText numberLabel="Q7">
                승인 결과를 전달 받을 메일 주소를 입력해 주세요.
              </QuestionText>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: '유효한 이메일 주소를 입력해 주세요.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: '유효한 이메일 주소를 입력해 주세요.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="ex. pickple@gmail.com"
                    isValid={!errors.email}
                    errorMessage={errors.email?.message}
                    isCountValue={false}
                  />
                )}
              />
            </section>
            <footer css={footerStyle}>
              <Button variant="large" type="submit" disabled={isPending}>
                다음
              </Button>
            </footer>
          </form>
        </main>
      </div>
    </>
  );
};

export default StepTwo;
