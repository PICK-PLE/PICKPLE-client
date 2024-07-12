import { LogoHeader } from '@components';
import {
  categoryContainer,
  categoryStyle,
  categoryWrapper,
  homeBannerStyle,
  titleStyle,
  iconStyle,
  iconNameStyle,
  homeStyle,
} from './Home.style';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import Footer from 'src/components/common/Footer/Footer';

const Home = () => {
  // CATEGORY_ICON 객체의 키와 값을 배열로 변환
  const categories = Object.entries(CATEGORY_ICON).map(([key, icon]) => ({
    icon: icon.fill_selected,
    name: CATEGORY_NAME[key as keyof typeof CATEGORY_NAME],
  }));

  return (
    <>
      <LogoHeader handleIconClick={() => {}} />
      <div css={homeStyle}>
        <div css={homeBannerStyle}></div>
        <div css={categoryContainer}>
          <p css={titleStyle}>이런 클래스 모임 어때요?</p>
          <div css={categoryWrapper}>
            {/* 첫 번째 줄: 첫 5개의 아이콘 */}
            <div css={categoryStyle}>
              {categories.slice(0, 5).map((category, index) => (
                <div key={index} css={iconStyle}>
                  <img src={category.icon} alt={`icon-${index}`} />
                  <p css={iconNameStyle}>{category.name}</p>
                </div>
              ))}
            </div>
            {/* 두 번째 줄: 다음 5개의 아이콘 */}
            <div css={categoryStyle}>
              {categories.slice(5, 10).map((category, index) => (
                <div key={index + 5} css={iconStyle}>
                  <img src={category.icon} alt={`icon-${index + 5}`} />
                  <p css={iconNameStyle}>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
