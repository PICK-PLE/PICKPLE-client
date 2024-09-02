import { LogoHeader } from '@components';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

import { useFetchMoimBanner, useFetchMoimCategories } from '@apis/domains/moim';


import { mainBanner } from 'src/assets/lotties';
import Footer from 'src/components/common/Footer/Footer';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';

import {
  categoryContainer,
  categoryStyle,
  titleStyle,
  iconStyle,
  iconNameStyle,
  homeLayout,
  pageLayout,
  homeBannerStyle,
  imageStyle,
} from './Home.style';

const Home = () => {
  const navigate = useNavigate();
  const { data: bannerId } = useFetchMoimBanner();
  const { data: categories } = useFetchMoimCategories();

  const handleCategoryClick = (category: string) => {
    navigate(`/class-list?category=${category}`);
  };

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
                    <img
                      css={imageStyle}
                      src={CATEGORY_ICON[category].fill_selected}
                      alt={`icon-${index}`}
                    />
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
