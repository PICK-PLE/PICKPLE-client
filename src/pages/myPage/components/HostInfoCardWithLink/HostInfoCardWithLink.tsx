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
import { components } from '@schema';
import { useNavigate } from 'react-router-dom';
import { HostProfileImage } from '@image';

type HostGetResponse = components['schemas']['HostGetResponse'];

interface hostInfoCardWithLinkListProps {
  hostInfoCardWithLinkList: HostGetResponse;
}
const HostInfoCardWithLink = ({ hostInfoCardWithLinkList }: hostInfoCardWithLinkListProps) => {
  const navigate = useNavigate();
  const { hostNickName, hostLink, hostCategoryList, hostImageUrl } = hostInfoCardWithLinkList;

  const handleCategoryClick = (category: string) => {
    navigate(`/categories?category=${category}`);
  };

  const handleButtonClick = () => {
    navigate('/class/post/step1');
  };

  const handleLinkClick = () => {
    window.open(hostLink, '_blank');
  };

  return (
    <section css={hostInfoCardWithLinkLayout}>
      <div css={hostInfoCardWithLinkContainer}>
        <section css={hostInfoCardWithLinkWrapper}>
          <article css={hostInfoWrapper}>
            <Image variant="round" width="6rem" src={hostImageUrl ?? HostProfileImage} />
            <div css={hostDetailWrapper}>
              <p css={hostNameStyle}>{hostNickName}</p>
              <div css={linkWrapper} onClick={handleLinkClick}>
                <p css={linkStyle}>{hostLink}</p>
              </div>
            </div>
          </article>
          <article css={categoryListWrapper}>
            {Object.values(hostCategoryList ?? []).map((category) => {
              return (
                category && (
                  <InterestCategoryButton
                    key={`host-category-${category}`}
                    icon={CATEGORY_SMALL_ICON[category]}
                    onClick={() => handleCategoryClick(category)}>
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
    </section>
  );
};

export default HostInfoCardWithLink;
