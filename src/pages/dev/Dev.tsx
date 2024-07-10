import { Carousel, ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import ApplicantAccordionList from 'src/components/common/applicantAccordions/ApplicantAccoridonList/ApplicantAccordionList';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';

const Dev = () => {
  const imageList = [
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
  ];
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <Carousel imageList={imageList} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <ApplicantAccordionList moimId={1} />
      </section>
      <SimpleUserProfile size="large" username="신청자" />
      <SimpleUserProfile size="medium" username="달아오르구마" />
      <SimpleUserProfile size="small" username="달아아오르구마마마마" />
    </>
  );
};

export default Dev;
