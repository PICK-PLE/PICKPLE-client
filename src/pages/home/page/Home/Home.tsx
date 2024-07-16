import { LogoHeader } from '@components';
import {
  categoryContainer,
  categoryStyle,
  homeBannerStyle,
  titleStyle,
  iconStyle,
  iconNameStyle,
  homeLayout,
  pageLayout,
} from './Home.style';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import Footer from 'src/components/common/Footer/Footer';
import { useFetchMoimBanner } from 'src/apis/domains/moim';
import { useAtom } from 'jotai';
import { categoriesAtom } from '@stores';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // TODO: 배너 클릭 시 해당 모임으로 이동
  const { data: bannerId } = useFetchMoimBanner();

  const [categories] = useAtom(categoriesAtom);

  const handleCategoryClick = (category: string) => {
    navigate(`/categories?category=${category}`);
  };

  return (
    <>
      <LogoHeader isIcon />
      <div css={pageLayout}>
        <main css={homeLayout}>
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
