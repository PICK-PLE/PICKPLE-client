import { LogoHeader } from '@components';
import {
  userDistinguishWrapper,
  userSelectedTextStyle,
  userUnselectedTextStyle,
} from './HostMyPage.style';
import { useEasyNavigate } from '@hooks';
import HostInfoCardWithLink from '@pages/myPage/components/HostInfoCardWithLink/HostInfoCardWithLink';

const HostMyPage = () => {
  const { goGuestMyPage, goHostMyPage } = useEasyNavigate();
  return (
    <>
      <LogoHeader />
      <div>
        <div css={userDistinguishWrapper}>
          <p css={userUnselectedTextStyle} onClick={goGuestMyPage}>
            게스트
          </p>
          <p css={userSelectedTextStyle} onClick={goHostMyPage}>
            호스트
          </p>
        </div>
      </div>
      <HostInfoCardWithLink />
    </>
  );
};

export default HostMyPage;
