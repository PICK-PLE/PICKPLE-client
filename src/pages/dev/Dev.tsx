import { ProgressBar } from '@components';
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
      </section>
    </>
  );
};

export default Dev;
