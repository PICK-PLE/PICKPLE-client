import { Carousel, ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import ApplicantAccordionList from 'src/components/common/applicantAccordions/ApplicantAccoridonList/ApplicantAccordionList';
import GuestClassRegisterCard from '../class/components/GuestClassRegisterCard/GuestClassRegisterCard';

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
      {/* <section css={devContainer}> */}
      {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
      {/* <ApplicantAccordionList moimId={1} />
      </section> */}
      <div css={devContainer}>
        <GuestClassRegisterCard />
      </div>
    </>
  );
};

export default Dev;
