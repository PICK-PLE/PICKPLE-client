import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFetchHostInfo } from '@apis/domains/host/useFetchHostInfo';
import { useFetchMoimListByHost } from '@apis/domains/moim/useFetchMoimListByHost';
import { useFetchReviewByHost } from '@apis/domains/review/useFetchReviewByHost';

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

const HostInfoPage = () => {
  const [activeTab, setActiveTab] = useState<'클래스' | '리뷰'>('클래스');

  const [user] = useAtom(userAtom);
  const { hostId } = useParams();
  const navigate = useNavigate();

  const handleTabClick = (tab: '클래스' | '리뷰') => {
    setActiveTab(tab);
  };

  const handleHostLinkButtonClick = () => {
    window.open(socialLink);
  };

  const handleEditIconClick = () => {
    navigate(`/host/info/edit/${hostId}`);
  };

  const { data: hostInfoData } = useFetchHostInfo(Number(hostId));
  const { nickName, profileUrl, count, keyword, description, socialLink } = hostInfoData ?? {};

  const { data: hostInfoClassData } = useFetchMoimListByHost(Number(hostId));
  const { data: hostInfoReviewData } = useFetchReviewByHost(Number(hostId));

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
              <div css={hostInfoEditIcon} onClick={handleEditIconClick}>
                <IcEdit />
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

                  {count !== undefined && count >= 2 && (
                    <div css={hostMarkMessageWrapper}>
                      <span css={hostMarkMessageStyle}>베테랑</span>
                    </div>
                  )}
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
              onClick={() => handleTabClick('클래스')}
              css={activeTab === '클래스' ? hostActiveTabTextStyle : hostTabTextStyle}>
              클래스
            </div>
            <div
              onClick={() => handleTabClick('리뷰')}
              css={activeTab === '리뷰' ? hostActiveTabTextStyle : hostTabTextStyle}>
              리뷰
            </div>
          </section>

          <section css={hostTabContentWrapper}>
            {activeTab === '클래스' ? (
              <div>
                {hostInfoClassData?.length === 0 ? (
                  <HostClassEmptyView />
                ) : (
                  <div css={hostClassCardWrapper}>
                    {hostInfoClassData &&
                      hostInfoClassData.map((data) => (
                        <ClassListCard
                          key={data.moimId}
                          classListData={data}
                          variant={'hostInfo'}
                        />
                      ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {hostInfoReviewData?.length === 0 ? (
                  <ClassReviewEmptyView />
                ) : (
                  <div>
                    {hostInfoReviewData &&
                      hostInfoReviewData.map((data) => (
                        <div>
                          <span>{data.content}</span> <span>{data.moimTitle}</span>
                        </div>
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
