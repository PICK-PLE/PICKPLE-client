import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useFetchMoimCategories } from '@apis/domains/moim';
import { useFetchMoimListByCategory } from '@apis/domains/moim/useFetchMoimListByCategory';

import { LogoHeader, Spinner } from '@components';
import { CATEGORY_ICON, CATEGORY_NAME } from '@constants';
import { ClassListEmptyView, ClassListCard } from '@pages/classList/components';
import Error from '@pages/error/Error';
import {
  IcNjobActive,
  IcInvestmentActive,
  IcEmploymentActive,
  IcProductivityActive,
  IcSpeechActive,
  IcSelfActive,
  IcMarketingActive,
  IcEducationActive,
  IcItActive,
} from 'src/assets/svg/active';
import {
  IcNjobInactive,
  IcInvestmentInactive,
  IcEmploymentInactive,
  IcProductivityInactive,
  IcSpeechInactive,
  IcSelfInactive,
  IcMarketingInactive,
  IcEducationInactive,
  IcItInactive,
} from 'src/assets/svg/inactive';

import {
  categoriesContainer,
  categoryWrapper,
  mainLayout,
  moimCardStyle,
  moimListContainer,
  seletedIconNameStyle,
  spinnerStyle,
  titleStyle,
  unSeletedIconNameStyle,
} from './ClassList.style';

const activeCategoryIcon: { [key: string]: JSX.Element } = {
  njob: <IcNjobActive />,
  investment: <IcInvestmentActive />,
  startup: <img src={CATEGORY_ICON.startup.active} alt={`startup-icon-active`} />,
  employment: <IcEmploymentActive />,
  productivity: <IcProductivityActive />,
  speech: <IcSpeechActive />,
  self: <IcSelfActive />,
  marketing: <IcMarketingActive />,
  education: <IcEducationActive />,
  it: <IcItActive />,
};
const inactiveCategoryIcon: { [key: string]: JSX.Element } = {
  njob: <IcNjobInactive />,
  investment: <IcInvestmentInactive />,
  startup: <img src={CATEGORY_ICON.startup.inactive} alt={`startup-icon-inactive`} />,
  employment: <IcEmploymentInactive />,
  productivity: <IcProductivityInactive />,
  speech: <IcSpeechInactive />,
  self: <IcSelfInactive />,
  marketing: <IcMarketingInactive />,
  education: <IcEducationInactive />,
  it: <IcItInactive />,
};

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

  const sortedMoimList = moimList?.slice().sort((a, b) => (a.dayOfDay ?? 0) - (b.dayOfDay ?? 0));

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
              {selectedCategory === category
                ? activeCategoryIcon[category]
                : inactiveCategoryIcon[category]}
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
            {sortedMoimList?.map((moim) => {
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
