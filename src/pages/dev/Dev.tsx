import { ProgressBar, QuestionText } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';

const Dev = () => {
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <QuestionText numberLabel="Q1">호스트님은 어떤 분이신가요?</QuestionText>
      </section>
    </>
  );
};

export default Dev;
