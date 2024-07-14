import { LogoHeader } from '@components';
import {
  categoryContainer,
  categoryStyle,
  homeBannerStyle,
  titleStyle,
  iconStyle,
  iconNameStyle,
  homeStyle,
} from './Home.style';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import Footer from 'src/components/common/Footer/Footer';
import { useFetchMoimCategories } from '@apis/domains/moim/useFetchMoimCategories';

const Home = () => {
  // CATEGORY_ICON 객체의 키와 값을 배열로 변환
  const categories = Object.entries(CATEGORY_ICON).map(([key, icon]) => ({
    icon: icon.fill_selected,
    name: CATEGORY_NAME[key as keyof typeof CATEGORY_NAME],
  }));

  const { data } = useFetchMoimCategories();

  console.log('moim data', data);

  return (
    <>
      <LogoHeader handleIconClick={() => {}} />
      <div css={homeStyle}>
        <div css={homeBannerStyle}></div>
        <div css={categoryContainer}>
          <p css={titleStyle}>이런 클래스 모임 어때요?</p>

          <div css={categoryStyle}>
            {categories.map((category, index) => (
              <div key={index} css={iconStyle}>
                <img src={category.icon} alt={`icon-${index}`} />
                <p css={iconNameStyle}>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
