import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetchMoimBanner, useFetchMoimCategories } from '@apis/domains/moim';

import { Image, LogoHeader } from '@components';
import {
  IcNjobDefault,
  IcInvestmentDefault,
  IcEmploymentDefault,
  IcProductivityDefault,
  IcSpeechDefault,
  IcSelfDefault,
  IcMarketingDefault,
  IcEducationDefault,
  IcItDefault,
} from 'src/assets/svg/default';
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
  bannerWrapper,
  swiperStyle,
} from './Home.style';

const categoryIcon: { [key: string]: JSX.Element } = {
  njob: <IcNjobDefault />,
  investment: <IcInvestmentDefault />,
  startup: <img src={CATEGORY_ICON.startup.default} alt={`startup-icon`} />,
  employment: <IcEmploymentDefault />,
  productivity: <IcProductivityDefault />,
  speech: <IcSpeechDefault />,
  self: <IcSelfDefault />,
  marketing: <IcMarketingDefault />,
  education: <IcEducationDefault />,
  it: <IcItDefault />,
};

const Home = () => {
  const navigate = useNavigate();
  const { data: bannerId } = useFetchMoimBanner();
  const { data: categories } = useFetchMoimCategories();

  const handleBannerClick = (banner: number) => {
    if (banner === 0) {
      navigate(`/class-list?category=all`);
    } else if (banner === 1) {
      navigate(`mypage/host`);
    }
  };

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
          <div css={homeBannerStyle}>
            <Swiper
              css={swiperStyle}
              pagination={{
                type: 'fraction',
              }}
              modules={[Pagination]}
              loop={true}
              className="mySwiper">
              {bannerId ? (
                bannerList.map((banner, index) => {
                  return (
                    <SwiperSlide key={banner.id} onClick={() => handleBannerClick(index)}>
                      <Lottie animationData={banner.animationData} width={'100%'} loop={true} />
                    </SwiperSlide>
                  );
                })
              ) : (
                <SwiperSlide onClick={() => handleBannerClick(1)}>
                  <Lottie animationData={bannerList[1].animationData} width={'100%'} loop={true} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div css={categoryContainer}>
            <p css={titleStyle}>이런 클래스 모임 어때요?</p>

            <ul css={categoryStyle}>
              {(categories || []).map((category, index) => {
                return (
                  <li key={index} css={iconStyle} onClick={() => handleCategoryClick(category)}>
                    {categoryIcon[category]}
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
