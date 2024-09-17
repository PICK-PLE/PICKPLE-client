import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useFetchMoimCategories } from '@apis/domains/moim';
import { useFetchMoimListByCategory } from '@apis/domains/moim/useFetchMoimListByCategory';

import { LogoHeader, Spinner } from '@components';
import { CATEGORY_ICON, CATEGORY_NAME } from '@constants';
import { ClassListEmptyView, ClassListCard } from '@pages/classList/components';
import Error from '@pages/error/Error';

import {
  categoriesContainer,
  categoryWrapper,
  imageStyle,
  mainLayout,
  moimCardStyle,
  moimListContainer,
  seletedIconNameStyle,
  spinnerStyle,
  titleStyle,
  unSeletedIconNameStyle,
} from './ClassList.style';

const ClassList = () => {
  const navigate = useNavigate();
  const categoriesRef = useRef<HTMLUListElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories } = useFetchMoimCategories();
  const selectedCategory = searchParams.get('category') || (categories ?? [])[0];
  const { data: moimList, refetch, isLoading } = useFetchMoimListByCategory(selectedCategory);

  useEffect(() => {
    if (categoriesRef.current) {
      const selectedIndex = (categories ?? []).indexOf(selectedCategory);
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

  const sortedHostInfoByDayOfDay = moimList
    ?.filter((data) => (data.dayOfDay ?? 0) === 0) // dayOfDay가 0 이상인 요소 필터링
    .concat(moimList.filter((data) => data.dayOfDay && data.dayOfDay > 0))
    .sort((a, b) => (a.dayOfDay ?? 0) - (b.dayOfDay ?? 0))
    .concat(moimList.filter((data) => data.dayOfDay && data.dayOfDay < 0));

  if (moimList === null) {
    return <Error />;
  }

  return (
    <>
      <LogoHeader />
      <ul css={categoriesContainer} ref={categoriesRef}>
        {(categories ?? []).map((category) => {
          return (
            <li css={categoryWrapper} key={category} onClick={() => handleCategoryClick(category)}>
              <img
                css={imageStyle}
                src={
                  selectedCategory === category
                    ? CATEGORY_ICON[category]?.active
                    : CATEGORY_ICON[category]?.inactive
                }
                alt={`icon-${category}`}
              />
              <p
                css={selectedCategory === category ? seletedIconNameStyle : unSeletedIconNameStyle}>
                {CATEGORY_NAME[category]}
              </p>
            </li>
          );
        })}
      </ul>
      <main css={mainLayout}>
        <h1 css={titleStyle}>{`${CATEGORY_NAME[selectedCategory]} 클래스 모임`}</h1>
        {isLoading ? (
          <div css={spinnerStyle}>
            <Spinner variant="page" />
          </div>
        ) : moimList?.length === 0 ? (
          <ClassListEmptyView />
        ) : (
          <ul css={moimListContainer}>
            {sortedHostInfoByDayOfDay?.map((moim) => {
              return (
                <li
                  css={moimCardStyle}
                  key={moim.moimId}
                  onClick={() => {
                    moim.moimId && handleMoimClick(moim.moimId);
                  }}>
                  <ClassListCard classListData={moim} variant={'classList'} />
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
};

export default ClassList;
