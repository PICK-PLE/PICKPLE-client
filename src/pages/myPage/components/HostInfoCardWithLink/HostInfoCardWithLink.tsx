import { HostCategoryList } from '@types';
import { hostInfoCardWithLinkData } from 'src/constants/mocks/hostInfoCardWithLinkData';
import {
  categoryListWrapper,
  hostDetailWrapper,
  hostInfoCardWithLinkContainer,
  hostInfoCardWithLinkLayout,
  hostInfoCardWithLinkWrapper,
  hostInfoWrapper,
  hostNameStyle,
  linkStyle,
  linkWrapper,
  line,
  navigateBoxWrapper,
} from './HostInfoCardWithLink.style';
import { Button, Image, InterestCategoryButton, NavigateBox } from '@components';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import { routePath } from '@constants';
import HostMyPageEmptyView from '../HostMyPageEmptyView/HostMyPageEmptyView';

const HostInfoCardWithLink = () => {
  const { hostNickName, hostLink, hostCategoryList, hostImageUrl } = hostInfoCardWithLinkData;

  // 카테고리 키를 배열로 저장하는데, hostCategories 타입 지정! 왜냐면 category2, 3은 null이 나올 수도 있으니까
  const categoryKeys = Object.keys(hostCategoryList) as (keyof HostCategoryList)[];

  return (
    <article css={hostInfoCardWithLinkLayout}>
      {hostInfoCardWithLinkData.hostNickName ? (
        <>
          <div css={hostInfoCardWithLinkContainer}>
            <div css={hostInfoCardWithLinkWrapper}>
              <div css={hostInfoWrapper}>
                <Image variant="round" width="6rem" src={hostImageUrl} />
                <div css={hostDetailWrapper}>
                  <p css={hostNameStyle}>{hostNickName}</p>
                  <div css={linkWrapper}>
                    <p css={linkStyle}>{hostLink}</p>
                  </div>
                </div>
              </div>
              <article css={categoryListWrapper}>
                {categoryKeys.map((key) => {
                  const category = hostCategoryList[key];
                  return category ? (
                    <InterestCategoryButton key={key} icon={CATEGORY_ICON[category].small}>
                      {CATEGORY_NAME[category]}
                    </InterestCategoryButton>
                  ) : null;
                })}
              </article>
              <Button variant="small">클래스 모임 개설하기</Button>
              <div css={line} />
              <article css={navigateBoxWrapper}>
                <NavigateBox path={routePath.HOST_MY_CLASS}>my 클래스 모임</NavigateBox>
                <NavigateBox path="오픈 카톡 링크">픽플에 문의하기</NavigateBox>
                <NavigateBox path="로그아웃 로직">로그아웃</NavigateBox>
              </article>
            </div>
          </div>
        </>
      ) : (
        <HostMyPageEmptyView />
      )}
    </article>
  );
};

export default HostInfoCardWithLink;
