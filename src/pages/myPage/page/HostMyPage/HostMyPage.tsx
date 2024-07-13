import { LogoHeader, NavigateBox } from '@components';
import {
  line,
  navigateBoxWrapper,
  userDistinguishWrapper,
  userSelectedTextStyle,
  userUnselectedTextStyle,
} from './HostMyPage.style';
import { useEasyNavigate } from '@hooks';
import HostInfoCardWithLink from '@pages/myPage/components/HostInfoCardWithLink/HostInfoCardWithLink';
import { routePath } from '@constants';

const HostMyPage = () => {
  const { goGuestMyPage, goHostMyPage } = useEasyNavigate();
  return (
    <>
      <LogoHeader />
      <div css={userDistinguishWrapper}>
        <p css={userUnselectedTextStyle} onClick={goGuestMyPage}>
          게스트
        </p>
        <p css={userSelectedTextStyle} onClick={goHostMyPage}>
          호스트
        </p>
      </div>
      <HostInfoCardWithLink />
      <div css={line} />
      <article css={navigateBoxWrapper}>
        <NavigateBox path={routePath.HOST_MY_CLASS}>my 클래스 모임</NavigateBox>
        <NavigateBox path="오픈 카톡 링크">픽플에 문의하기</NavigateBox>
        <NavigateBox path="로그아웃 로직">로그아웃</NavigateBox>
      </article>
    </>
  );
};

export default HostMyPage;
