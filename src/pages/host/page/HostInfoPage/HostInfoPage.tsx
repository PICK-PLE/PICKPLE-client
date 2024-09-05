import { useState } from 'react';

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
import { IcSpickerMark } from '@svg';

const HostInfoPage = () => {
  const [activeTab, setActiveTab] = useState<'클래스' | '리뷰'>('클래스');

  const handleClassTabClick = () => {
    setActiveTab('클래스');
  };

  const handleReviewTabClick = () => {
    setActiveTab('리뷰');
  };

  // 클래스 목데이터
  const hostClassData = [
    {
      moimId: 1,
      dayOfDay: 1,
      title: '부산 10년 토박이 달아오르구마',
      hostNickName: '달아오르구마',
      dateList: {
        date: '2024.07.06',
        dayOfWeek: '토',
        startTime: '15:00',
        endTime: '18:00',
      },
      moimImageUrl: 'example.com',
      hostImageUrl: 'example.com',
    },
    {
      moimId: 2,
      dayOfDay: 1,
      title: '서산 10년 토박이 부농고마',
      hostNickName: '부농고마',
      dateList: {
        date: '2024.07.06',
        dayOfWeek: '토',
        startTime: '15:00',
        endTime: '18:00',
      },
      moimImageUrl: 'example.com',
      hostImageUrl: 'example.com',
    },
  ];

  // 리뷰 예시
  const hostReviewData = ['좋아요', '재밌어욧', '최고'];

  return (
    <div>
      <LogoHeader />
      <div css={hostInfoLayout}>
        <article>
          <section css={hostImageWrapper}>
            <Image src={images.HostBackGroundImage} customStyle={hostBackgroundImage} />
            <div css={hostProfileImage}>
              <Image src={images.HostProfileImage} variant="round" width="8.2rem" />
            </div>
          </section>

          <section css={hostProfileContainer}>
            <div css={hostProfileWrapper}>
              <div css={hostProfileStyle}>
                <div css={hostNameMarkWrapper}>
                  <div css={hostNameWrapper}>
                    <p css={hostNameStyle}>민서 님</p>
                    <IcSpickerMark css={hostMarkIconStyle} />
                  </div>

                  <div css={hostMarkMessageWrapper}>
                    <span css={hostMarkMessageStyle}>베테랑</span>
                  </div>
                </div>

                <span css={hostKeywordStyle}>방구석 요리 전문가</span>
              </div>
              <div css={hostDescriptionWrapper}>
                <span css={hostDescriptionStyle}>
                  안녕하세요, 스픽커 그것은입니다. 아니 이것은입니다.안녕하세요, 스픽커
                  그것은입니다. 아니 이것은입니다. 잘 부탁드립니다 홧팅
                </span>
              </div>
            </div>

            <Button variant="small">스픽커 더 알아보기</Button>
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
                      <ClassListCard key={data.moimId} classListData={data} />
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
