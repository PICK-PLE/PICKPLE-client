import { NavigateBox, ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import Select from 'src/components/common/select/Select';

const Dev = () => {
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <NavigateBox path={"/"}>로그아웃</NavigateBox>
      </section>
    </>
  );
};

export default Dev;
