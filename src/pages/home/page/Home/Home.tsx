import { LogoHeader, Spinner } from '@components';
import {
  categoryContainer,
  categoryStyle,
  titleStyle,
  iconStyle,
  iconNameStyle,
  homeLayout,
  pageLayout,
  homeBannerStyle,
} from './Home.style';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import Footer from 'src/components/common/Footer/Footer';
import { useFetchMoimBanner, useFetchMoimCategories } from '@apis/domains/moim';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { mainBanner } from 'src/assets/lotties';

const Home = () => {
  const navigate = useNavigate();
  const { data: bannerId, isLoading } = useFetchMoimBanner();
  const { data: categories } = useFetchMoimCategories();

  const handleCategoryClick = (category: string) => {
    navigate(`/categories?category=${category}`);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <LogoHeader isIcon />
      <div css={pageLayout}>
        <main css={homeLayout}>
          <div
            css={homeBannerStyle}
            onClick={() => {
              navigate(`class/${bannerId}`);
            }}>
            <Lottie animationData={mainBanner} width={'100%'} loop={true} />
          </div>
          <div css={categoryContainer}>
            <p css={titleStyle}>이런 클래스 모임 어때요?</p>

            <ul css={categoryStyle}>
              {(categories || []).map((category, index) => {
                return (
                  <li key={index} css={iconStyle} onClick={() => handleCategoryClick(category)}>
                    <img src={CATEGORY_ICON[category].fill_selected} alt={`icon-${index}`} />
                    <p css={iconNameStyle}>{CATEGORY_NAME[category]}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
