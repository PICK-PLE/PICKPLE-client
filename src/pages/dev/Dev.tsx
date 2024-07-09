import { ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import ApplicantAccordionList from 'src/components/common/applicantAccordions/ApplicantAccoridonList/ApplicantAccordionList';

const Dev = () => {
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <ApplicantAccordionList moimId={1} />
      </section>
    </>
  );
};

export default Dev;
