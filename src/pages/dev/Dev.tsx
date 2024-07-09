import { ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import Image from 'src/components/common/Image/Image';
import Label from 'src/components/common/Label/Label';

const Dev = () => {
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <Image
          variant="square"
          width="200px"
          height="200px"
          label={<Label variant="status">마감</Label>}
        />

        <Image
          variant="square"
          width="200px"
          height="200px"
          label={<Label variant="status">입금 대기</Label>}
        />
      </section>
    </>
  );
};

export default Dev;
