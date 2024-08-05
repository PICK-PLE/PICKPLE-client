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
import { smoothScroll } from '@utils';
import { useAtom } from 'jotai';
import { hostApplyAtom } from '@stores';
import { Controller, useForm } from 'react-hook-form';
import { components } from '@schema';

const StepOne = ({ onNext }: StepProps) => {
  const [hostApplyState, setHostApplyState] = useAtom(hostApplyAtom);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: hostApplyState,
    mode: 'onBlur',
  });

  const onSubmit = (data: components['schemas']['SubmitterCreateRequest']) => {
    setHostApplyState((prev) => ({ ...prev, ...data }));
    console.log(data);
    onNext();
    smoothScroll(0);
  };

  return (
    <>
      <ProgressBar progress={33.3} />
      <div css={layoutStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>호스트 신청</h4>
          <h1 css={subTitleStyle}>호스트님에 대해 알려주세요!</h1>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} >
          <main css={mainStyle}>
            <section css={sectionStyle}>
              <QuestionText numberLabel="Q1">호스트님은 어떤 분이신가요?</QuestionText>
              <Controller
                name="intro"
                control={control}
                rules={{ required: '빈칸을 입력해주세요.' }}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    size="medium"
                    maxLength={300}
                    placeholder={`호스트님에 대해 자유롭게 소개해 주세요! \n모임 참여 및 개최 경험 등도 좋아요.`}
                    aria-invalid={!!errors.intro}
                    isValid={!errors.intro}
                    errorMessage={errors.intro?.message}
                  />
                )}
              />
            </section>
            <section css={sectionStyle}>
              <QuestionText numberLabel="Q2">호스트로 이루고 싶은 목표를 알려주세요!</QuestionText>
              <Controller
                name="goal"
                control={control}
                rules={{ required: '빈칸을 입력해주세요.' }}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    size="medium"
                    maxLength={300}
                    placeholder={`모임에서 어떤 가치를 공유하고 싶으신가요? \n그 이유는 무엇인가요?`}
                    aria-invalid={!!errors.goal}
                    isValid={!errors.goal}
                    errorMessage={errors.goal?.message}
                  />
                )}
              />
            </section>
            <section css={sectionStyle}>
              <QuestionText numberLabel="Q3">
                호스트님을 잘 알 수 있는 SNS 혹은 홈페이지 링크를 첨부해 주세요!
              </QuestionText>
              <Controller
                name="link"
                control={control}
                rules={{
                  required: '올바른 URL 형식을 입력해주세요.',
                  pattern: {
                    value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([^\s]*)?$/i,
                    message: '올바른 URL 형식을 입력해주세요.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="URL을 첨부해주세요."
                    isValid={!errors.link}
                    errorMessage={errors.link?.message}
                    isCountValue={false}
                  />
                )}
              />
            </section>
          </main>
          <footer css={footerStyle}>
            <Button variant="large" type="submit" disabled={isSubmitting}>
              다음
            </Button>
          </footer>
        </form>
      </div>
    </>
  );
};

export default StepOne;
