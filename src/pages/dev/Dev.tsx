import { Notice, ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';

const Dev = () => {
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <Notice numberLabel="1">
          모임 참여 전, 호스트가 게시하는 공지사항을 <br />
          꼼꼼히 확인해주세요.
        </Notice>
      </section>
    </>
  );
};

export default Dev;
