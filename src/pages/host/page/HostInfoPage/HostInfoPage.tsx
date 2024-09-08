import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFetchHostInfo } from '@apis/domains/host/useFetchHostInfo';

import { Button, Image, LogoHeader } from '@components';
import { images } from '@constants';
import { ClassReviewEmptyView } from '@pages/class/components';
import { hostNameStyle } from '@pages/class/components/HostInfoCard/HostInfoCard.style';
import { ClassListCard } from '@pages/classList/components';
import HostClassEmptyView from '@pages/host/components/HostClassEmptyView/HostClassEmptyView';
import {
  hostActiveTabTextStyle,
  hostBackgroundImage,
  hostClassCardWrapper,
  hostDescriptionStyle,
  hostDescriptionWrapper,
  hostImageWrapper,
  hostInfoContainer,
  hostInfoEditIcon,
  hostInfoLayout,
  hostKeywordStyle,
  hostMarkIconStyle,
  hostMarkMessageStyle,
  hostMarkMessageWrapper,
  hostNameMarkWrapper,
  hostNameWrapper,
  hostProfileContainer,
  hostProfileImage,
  hostProfileStyle,
  hostProfileWrapper,
  hostTabContainer,
  hostTabContentWrapper,
  hostTabTextStyle,
  hostTabWrapper,
} from '@pages/host/page/HostInfoPage/HostInfoPage.style';
import { userAtom } from '@stores';
import { IcEdit, IcSpickerMark } from '@svg';
import { hostClassData, hostReviewData } from 'src/constants/mocks/hostInfo';

const HostInfoPage = () => {
  const [activeTab, setActiveTab] = useState<'클래스' | '리뷰'>('클래스');

  const [user] = useAtom(userAtom);
  const { hostId } = useParams();
  const navigate = useNavigate();

  const handleClassTabClick = () => {
    setActiveTab('클래스');
  };

  const handleReviewTabClick = () => {
    setActiveTab('리뷰');
  };

  const handleHostLinkButtonClick = () => {
    window.open(socialLink, '_blank');
  };

  const handleEditIconClick = () => {
    navigate(`/host/info/edit/${hostId}`);
  };

  const { data: hostInfoData } = useFetchHostInfo(Number(hostId));
  const { nickName, profileUrl, count, keyword, description, socialLink } = hostInfoData ?? {};

  return (
    <div>
      <LogoHeader />
      <div css={hostInfoLayout}>
        <article css={hostInfoContainer}>
          <section css={hostImageWrapper}>
            <img src={images.HostBackGroundImage} css={hostBackgroundImage} />
            <div css={hostProfileImage}>
              <Image
                src={profileUrl ? profileUrl : images.HostProfileImage}
                variant="round"
                width="8.2rem"
              />
            </div>
            {Number(user.hostId) === Number(hostId) && (
              <div css={hostInfoEditIcon}>
                <IcEdit onClick={handleEditIconClick} />
              </div>
            )}
          </section>

          <section css={hostProfileContainer}>
            <div css={hostProfileWrapper}>
              <div css={hostProfileStyle}>
                <div css={hostNameMarkWrapper}>
                  <div css={hostNameWrapper}>
                    <p css={hostNameStyle}>{nickName} 님</p>
                    <IcSpickerMark css={hostMarkIconStyle} />
                  </div>

                  {count && count >= 2 ? (
                    <div css={hostMarkMessageWrapper}>
                      <span css={hostMarkMessageStyle}>베테랑</span>
                    </div>
                  ) : null}
                </div>

                <span css={hostKeywordStyle}>{keyword}</span>
              </div>
              <div css={hostDescriptionWrapper}>
                <span css={hostDescriptionStyle}>{description}</span>
              </div>
            </div>

            <Button variant="smallStroke" onClick={handleHostLinkButtonClick}>
              스픽커 더 알아보기
            </Button>
          </section>
        </article>

        <article css={hostTabContainer}>
          <section css={hostTabWrapper}>
            <div
              onClick={handleClassTabClick}
              css={activeTab === '클래스' ? hostActiveTabTextStyle : hostTabTextStyle}>
              클래스
            </div>
            <div
              onClick={handleReviewTabClick}
              css={activeTab === '리뷰' ? hostActiveTabTextStyle : hostTabTextStyle}>
              리뷰
            </div>
          </section>

          <section css={hostTabContentWrapper}>
            {activeTab === '클래스' ? (
              <div>
                {hostClassData?.length === 0 ? (
                  <HostClassEmptyView />
                ) : (
                  <div css={hostClassCardWrapper}>
                    {hostClassData.map((data) => (
                      <ClassListCard key={data.moimId} classListData={data} variant={'hostInfo'} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {hostReviewData?.length === 0 ? (
                  <ClassReviewEmptyView />
                ) : (
                  <div>
                    {hostReviewData.map((data) => (
                      <span>{data}</span>
                    ))}
                  </div>
                )}
              </div>
              //수정 필요: 리뷰카드 머지되면 반영하기
            )}
          </section>
        </article>
      </div>
    </div>
  );
};

export default HostInfoPage;
