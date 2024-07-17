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
import { CATEGORY_NAME, CATEGORY_SMALL_ICON } from 'src/constants/category';
import HostMyPageEmptyView from '../HostMyPageEmptyView/HostMyPageEmptyView';
import { HostCategoryList, HostInfoCardWithLinkDataResponseType } from '@types';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@constants';

interface hostInfoCardWithLinkListProps {
  hostInfoCardWithLinkList: HostInfoCardWithLinkDataResponseType;
}
const HostInfoCardWithLink = ({ hostInfoCardWithLinkList }: hostInfoCardWithLinkListProps) => {
  const { hostNickName, hostLink, hostCategoryList, hostImageUrl } = hostInfoCardWithLinkList;
  const navigate = useNavigate();
  const categoryKeys: (keyof HostCategoryList)[] = ['category1', 'category2', 'category3'];

  const handleButtonClick = () => {
    navigate(routePath.CLASS_POST);
  };

  return (
    <section css={hostInfoCardWithLinkLayout}>
      {hostNickName ? (
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
                  return (
                    category && (
                      <InterestCategoryButton
                        key={key}
                        icon={CATEGORY_SMALL_ICON[category]}
                        onClick={() => {}}>
                        {CATEGORY_NAME[category]}
                      </InterestCategoryButton>
                    )
                  );
                })}
              </article>
              <Button variant="small" onClick={handleButtonClick}>
                클래스 모임 개설하기
              </Button>
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
