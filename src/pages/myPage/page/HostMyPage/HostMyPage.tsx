import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { useFetchMyHost } from '@apis/domains/moim/useFetchMyHost';

import { LogoHeader, Modal, NavigateBox, Spinner } from '@components';
import { routePath } from '@constants';
import { useEasyNavigate } from '@hooks';
import { Error } from '@pages/error';
import { ApprovalReviewingView, HostMyPageEmptyView } from '@pages/myPage/components';
import HostInfoCardWithLink from '@pages/myPage/components/HostInfoCardWithLink/HostInfoCardWithLink';
import LogoutModal from '@pages/myPage/components/LogoutModal/LogoutModal';
import { userAtom } from '@stores';
import { IcNext } from '@svg';

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

import { components } from '@schema';
import { ErrorType } from '@types';

type HostGetResponse = components['schemas']['HostGetResponse'];

// 타입 가드
const isHostGetResponse = (data: unknown): data is HostGetResponse => {
  if (typeof data === 'object' && data !== null) {
    const obj = data as Record<string, unknown>;
    return typeof obj.hostId === 'number' && typeof obj.hostNickName === 'string';
  }
  return false;
};

// 타입 가드
const isErrorResponseType = (data: unknown): data is ErrorType => {
  if (typeof data === 'object' && data !== null) {
    const obj = data as { [key: string]: unknown };
    return typeof obj.message === 'string' && typeof obj.status === 'number';
  }
  return false;
};
const HostMyPage = () => {
  const [user] = useAtom(userAtom);
  const { data: hostInfoResponse, isSuccess, isLoading } = useFetchMyHost();
  const { goGuestMyPage } = useEasyNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { hostId: jotaiHostId, hostNickname: jotaiHostNickname } = user;

  let hostInfoData: HostGetResponse | null = null;
  let errorData: ErrorType | null = null;

  if (isSuccess && hostInfoResponse) {
    if (isHostGetResponse(hostInfoResponse)) {
      hostInfoData = hostInfoResponse;
    } else if (isErrorResponseType(hostInfoResponse)) {
      errorData = hostInfoResponse;
    }
  }

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenKakaoClick = () => {
    window.open(`${import.meta.env.VITE_OPEN_KAKAO_URL}`, '_blank');
  };

  const handleLogoutClick = () => {
    handleModalOpen();
  };

  useEffect(() => {
    if (isSuccess && hostInfoData && !jotaiHostId && !jotaiHostNickname) {
      const { hostId, hostNickName } = hostInfoData;
      const isFirstApproval = hostId && hostNickName;
      if (isFirstApproval) {
        // TODO: alert 2번 뜨는 문제 해결
        alert('호스트 최초 승인 후 재로그인이 필요합니다.');
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }
  }, [isSuccess, hostInfoData, jotaiHostId, jotaiHostNickname]);

  return (
    <>
      <LogoHeader isIcon={false} />
      <nav css={myPageNav}>
        <p css={[tabStyle]} onClick={goGuestMyPage}>
          참가자
        </p>
        <p css={[tabStyle, selectedTabStyle]}>스픽커</p>
      </nav>

      {isLoading ? (
        <Spinner variant="component" />
      ) : errorData && errorData.status === 40405 ? (
        <HostMyPageEmptyView />
      ) : errorData && errorData.status === 40003 ? (
        <ApprovalReviewingView />
      ) : hostInfoData ? (
        <main>
          <div css={profileWrapper}>
            <HostInfoCardWithLink hostInfoCardWithLinkList={hostInfoData ?? {}} />
          </div>
          <div css={divdier} />
          <section css={navigateBoxContainer}>
            <NavigateBox path={routePath.HOST_MY_CLASS}>my 클래스 모임</NavigateBox>
            <div css={logoutBox} onClick={handleOpenKakaoClick}>
              <span css={logoutTextStyle}>픽플에 문의하기</span>
              <span css={iconStyle}>
                <IcNext />
              </span>
            </div>
            <div css={logoutBox} onClick={handleLogoutClick}>
              <span css={logoutTextStyle}>로그아웃</span>
              <span css={iconStyle}>
                <IcNext />
              </span>
            </div>
          </section>
        </main>
      ) : (
        <Error />
      )}

      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <LogoutModal onClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default HostMyPage;
