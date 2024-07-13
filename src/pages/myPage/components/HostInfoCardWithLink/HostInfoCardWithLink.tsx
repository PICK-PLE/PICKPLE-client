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
} from './HostInfoCardWithLink.style';
import { Button, Image, InterestCategoryButton } from '@components';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import HostMyPageEmptyView from '../HostMyPageEmptyView/HostMyPageEmptyView';

const HostInfoCardWithLink = () => {
  const { hostNickName, hostLink, hostCategoryList, hostImageUrl } = hostInfoCardWithLinkData;

  // 카테고리 키를 배열로 저장하는데, hostCategories 타입 지정! 왜냐면 category2, 3은 null이 나올 수도 있으니까
  const categoryKeys = Object.keys(hostCategoryList) as (keyof HostCategoryList)[];

  return (
    <section css={hostInfoCardWithLinkLayout}>
      {hostInfoCardWithLinkData.hostNickName ? (
        <>
          <div css={hostInfoCardWithLinkContainer}>
            <section css={hostInfoCardWithLinkWrapper}>
              <article css={hostInfoWrapper}>
                <Image variant="round" width="6rem" src={hostImageUrl} />
                <div css={hostDetailWrapper}>
                  <p css={hostNameStyle}>{hostNickName}</p>
                  <div css={linkWrapper}>
                    <p css={linkStyle}>{hostLink}</p>
                  </div>
                </div>
              </article>
              <article css={categoryListWrapper}>
                {categoryKeys.map((key) => {
                  const category = hostCategoryList[key];
                  return category ? (
                    <InterestCategoryButton
                      key={key}
                      icon={CATEGORY_ICON[category].small}
                      onClick={() => {}}>
                      {CATEGORY_NAME[category]}
                    </InterestCategoryButton>
                  ) : null;
                })}
              </article>
              <Button variant="small">클래스 모임 개설하기</Button>
            </section>
          </div>
        </>
      ) : (
        <HostMyPageEmptyView />
      )}
    </section>
  );
};

export default HostInfoCardWithLink;
