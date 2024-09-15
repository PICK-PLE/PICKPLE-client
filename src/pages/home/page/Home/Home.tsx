import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetchMoimBanner, useFetchMoimCategories } from '@apis/domains/moim';

import { Image, LogoHeader } from '@components';
import Footer from 'src/components/common/Footer/Footer';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import { PicksightBanner } from 'src/constants/images';

import 'swiper/css';
import 'swiper/css/pagination';
import { bannerList } from './config';
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
  bannerWrapper,
  swiperStyle,
} from './Home.style';

const Home = () => {
  const navigate = useNavigate();
  const { data: bannerId } = useFetchMoimBanner();
  const { data: categories } = useFetchMoimCategories();

  const handleCategoryClick = (category: string) => {
    navigate(`/class-list?category=${category}`);
  };

  const handleClickBanner = () => {
    navigate(`/article/picksight`);
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
            <Swiper
              css={swiperStyle}
              pagination={{
                type: 'fraction',
              }}
              modules={[Pagination]}
              loop={true}
              className="mySwiper">
              {bannerList.map((banner) => {
                return (
                  <SwiperSlide key={banner.id}>
                    <Lottie animationData={banner.animationData} width={'100%'} loop={true} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div css={categoryContainer}>
            <p css={titleStyle}>이런 클래스 모임 어때요?</p>

            <ul css={categoryStyle}>
              {(categories || []).map((category, index) => {
                return (
                  <li key={index} css={iconStyle} onClick={() => handleCategoryClick(category)}>
                    <img
                      css={imageStyle}
                      src={CATEGORY_ICON[category].default}
                      alt={`icon-${index}`}
                    />
                    <p css={iconNameStyle}>{CATEGORY_NAME[category]}</p>
                  </li>
                );
              })}
            </ul>
            <section css={bannerWrapper} onClick={handleClickBanner}>
              <Image src={PicksightBanner} width="100%" />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
