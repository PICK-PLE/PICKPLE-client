import { LogoHeader } from '@components';
import {
  categoriesContainer,
  categoryWrapper,
  iconNameStyle,
  mainLayout,
  moimCardStyle,
  moimListContainer,
  titleStyle,
} from './Categories.style';
import { categoriesAtom } from '@stores';
import { useAtom } from 'jotai';
import { CATEGORY_ICON, CATEGORY_NAME } from '@constants';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ClassListCard } from '@pages/categories/components';
import { useFetchMoimListByCategory } from '@apis/domains/moim/useFetchMoimListByCategory';
import { useEffect, useRef } from 'react';
import Error from '@pages/error/Error';
import { Spinner } from 'src/components/common/Spinner/Spinner';

const Categories = () => {
  const navigate = useNavigate();
  const [categories] = useAtom(categoriesAtom);
  const categoriesRef = useRef<HTMLUListElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || categories[0];
  const { data: moimList, refetch, isLoading } = useFetchMoimListByCategory(selectedCategory);

  useEffect(() => {
    if (categoriesRef.current) {
      const selectedIndex = categories.indexOf(selectedCategory);
      setTimeout(() => {
        if (selectedIndex < 5) {
          categoriesRef.current?.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          categoriesRef.current?.scrollTo({
            left: categoriesRef.current?.scrollWidth,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [categories, selectedCategory]);

  useEffect(() => {
    refetch();
  }, [selectedCategory, refetch]);

  const handleCategoryClick = (category: string) => {
    setSearchParams({ category });
  };

  const handleMoimClick = (moimId: number) => {
    navigate(`/class/${moimId}`);
  };

  if (moimList === null) {
    return (
      <>
        <Error />
      </>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <LogoHeader />
      <ul css={categoriesContainer} ref={categoriesRef}>
        {categories.map((category) => {
          return (
            <li css={categoryWrapper} key={category} onClick={() => handleCategoryClick(category)}>
              <img
                src={
                  selectedCategory === category
                    ? CATEGORY_ICON[category]?.fill_selected
                    : CATEGORY_ICON[category]?.fill
                }
                alt={`icon-${category}`}
              />
              <p css={iconNameStyle}>{CATEGORY_NAME[category]}</p>
            </li>
          );
        })}
      </ul>
      <main css={mainLayout}>
        <h1 css={titleStyle}>{`${CATEGORY_NAME[selectedCategory]} 클래스 모임`}</h1>
        <ul css={moimListContainer}>
          {(moimList || []).map((moim) => {
            return (
              <li
                css={moimCardStyle}
                key={moim.moimId}
                onClick={() => {
                  moim.moimId && handleMoimClick(moim.moimId);
                }}>
                <ClassListCard classListData={moim} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Categories;
