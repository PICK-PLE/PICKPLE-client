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
import { useSearchParams } from 'react-router-dom';
import { ClassListCard } from '@pages/categories/components';
import { useFetchMoimListByCategory } from '@apis/domains/moim/useFetchMoimListByCategory';
import { useEffect } from 'react';

const Categories = () => {
  const [categories] = useAtom(categoriesAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || categories[0];
  const { data: moimList, refetch } = useFetchMoimListByCategory(selectedCategory);

  useEffect(() => {
    refetch();
  }, [selectedCategory, refetch]);

  const handleCategoryClick = (category: string) => {
    setSearchParams({ category });
  };
  return (
    <>
      <LogoHeader />
      <ul css={categoriesContainer}>
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
              <li css={moimCardStyle} key={moim.moimId}>
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
