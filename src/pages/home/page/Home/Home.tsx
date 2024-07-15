import { LogoHeader } from '@components';
import {
  categoryContainer,
  categoryStyle,
  homeBannerStyle,
  titleStyle,
  iconStyle,
  iconNameStyle,
  homeStyle,
  homeLayout,
} from './Home.style';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import Footer from 'src/components/common/Footer/Footer';
import { useFetchMoimBanner } from '@apis/domains/moim/useFetchMoimBanner';
import { useFetchMoimCategories } from '@apis/domains/moim/useFetchMoimCategories';

const Home = () => {
  // TODO: 배너 클릭 시 해당 모임으로 이동
  const { data: bannerId } = useFetchMoimBanner();
  const { data: categories } = useFetchMoimCategories();

  return (
    <>
      <LogoHeader isIcon />
      <main css={homeLayout}>
        <div css={homeStyle}>
          <img
            css={homeBannerStyle}
            src="https://placehold.co/375x280"
            alt="banner"
            onClick={() => {
              console.log('bannerId:', bannerId);
            }}
          />

          <div css={categoryContainer}>
            <p css={titleStyle}>이런 클래스 모임 어때요?</p>

            <div css={categoryStyle}>
              {(categories || []).map((category, index) => {
                return (
                  <div key={index} css={iconStyle}>
                    <img src={CATEGORY_ICON[category].fill_selected} alt={`icon-${index}`} />
                    <p css={iconNameStyle}>{CATEGORY_NAME[category]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
