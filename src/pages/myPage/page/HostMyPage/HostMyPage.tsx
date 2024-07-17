import { LogoHeader, NavigateBox } from '@components';
import {
  divdier,
  iconStyle,
  logoutBox,
  logoutTextStyle,
  myPageNav,
  navigateBoxContainer,
  profileWrapper,
  selectedTabStyle,
  tabStyle,
} from './HostMyPage.style';
import { useEasyNavigate } from '@hooks';
import HostInfoCardWithLink from '@pages/myPage/components/HostInfoCardWithLink/HostInfoCardWithLink';
import { useFetchMyHost } from '@apis/domains/moim/useFetchMyHost';
import { routePath } from '@constants';
import { usePostLogout } from '@apis/domains/user';
import { IcNext } from '@svg';
import { HostMyPageEmptyView } from '@pages/myPage/components';
import { useAtom } from 'jotai';
import { userAtom } from '@stores';
import { useEffect } from 'react';

const HostMyPage = () => {
  const [user, setUser] = useAtom(userAtom);
  const { data: hostInfoData, isSuccess } = useFetchMyHost();
  const { goGuestMyPage } = useEasyNavigate();
  const { mutate } = usePostLogout();

  const { hostId: jotaiHostId, hostNickname: jotaiHostNickname } = user;
  const hasHostInfoInJotai =
    jotaiHostId && jotaiHostId !== 0 && jotaiHostNickname && jotaiHostNickname !== '';

  const hasHostInfoInResponse =
    hostInfoData && hostInfoData.hostId !== 0 && hostInfoData && hostInfoData.hostNickName !== '';

  const handleLogoutClick = () => {
    mutate();
  };

  useEffect(() => {
    if (isSuccess && hostInfoData) {
      const { hostId, hostNickName } = hostInfoData;
      if (hostId && hostNickName) {
        setUser((prevState) => {
          return { ...prevState, hostId, hostNickname: hostNickName };
        });
      }
    }
  }, [isSuccess, hostInfoData, setUser]);

  return (
    <>
      <LogoHeader isIcon={false} />
      <nav css={myPageNav}>
        <p css={[tabStyle]} onClick={goGuestMyPage}>
          게스트
        </p>
        <p css={[tabStyle, selectedTabStyle]}>호스트</p>
      </nav>

      {hasHostInfoInJotai || hasHostInfoInResponse ? (
        <main>
          <div css={profileWrapper}>
            <HostInfoCardWithLink hostInfoCardWithLinkList={hostInfoData ?? {}} />
          </div>
          <div css={divdier} />
          <section css={navigateBoxContainer}>
            <NavigateBox path={routePath.HOST_MY_CLASS}>my 클래스 모임</NavigateBox>
            <NavigateBox path="오픈 카톡 링크">픽플에 문의하기</NavigateBox>
            <div css={logoutBox} onClick={handleLogoutClick}>
              <span css={logoutTextStyle}>로그아웃</span>
              <span css={iconStyle}>
                <IcNext />
              </span>
            </div>
          </section>
        </main>
      ) : (
        <HostMyPageEmptyView />
      )}
    </>
  );
};

export default HostMyPage;
