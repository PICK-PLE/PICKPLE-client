import { useFetchMoimCategories } from '@apis/domains/moim';

import { CATEGORY_NAME } from '@constants';
import {
  IcNjobLineActive,
  IcInvestmentLineActive,
  IcStartupLineActive,
  IcEmploymentLineActive,
  IcProductivityLineActive,
  IcSpeechLineActive,
  IcSelfLineActive,
  IcMarketingLineActive,
  IcEducationLineActive,
  IcItLineActive,
} from 'src/assets/svg/line-active';
import {
  IcNjobLineInactive,
  IcInvestmentLineInactive,
  IcStartupLineInactive,
  IcEmploymentLineInactive,
  IcProductivityLineInactive,
  IcSpeechLineInactive,
  IcSelfLineInactive,
  IcMarketingLineInactive,
  IcEducationLineInactive,
  IcItLineInactive,
} from 'src/assets/svg/line-inactive';

import { labelStyle, liStyle, ulStyle } from './CategorySelectBox.style';
interface Category {
  category1: string;
  category2?: string;
  category3?: string;
}

interface CategorySelectBoxProps {
  selectedCategories: Category;
  onUpdateCategories: (newCategories: Category) => void;
}

const activeCategoryIcon: { [key: string]: JSX.Element } = {
  njob: <IcNjobLineActive />,
  investment: <IcInvestmentLineActive />,
  startup: <IcStartupLineActive />,
  employment: <IcEmploymentLineActive />,
  productivity: <IcProductivityLineActive />,
  speech: <IcSpeechLineActive />,
  self: <IcSelfLineActive />,
  marketing: <IcMarketingLineActive />,
  education: <IcEducationLineActive />,
  it: <IcItLineActive />,
};
const inactiveCategoryIcon: { [key: string]: JSX.Element } = {
  njob: <IcNjobLineInactive />,
  investment: <IcInvestmentLineInactive />,
  startup: <IcStartupLineInactive />,
  employment: <IcEmploymentLineInactive />,
  productivity: <IcProductivityLineInactive />,
  speech: <IcSpeechLineInactive />,
  self: <IcSelfLineInactive />,
  marketing: <IcMarketingLineInactive />,
  education: <IcEducationLineInactive />,
  it: <IcItLineInactive />,
};

const CategorySelectBox = ({
  selectedCategories = { category1: '', category2: '', category3: '' },
  onUpdateCategories,
}: CategorySelectBoxProps) => {
  const { data: categories } = useFetchMoimCategories();

  const handleIconClick = (name: string) => {
    const newCategories = { ...selectedCategories };

    // 이미 선택된 항목을 클릭하면 해당 항목을 비운다.
    if (newCategories.category1 === name) {
      newCategories.category1 = '';
    } else if (newCategories.category2 === name) {
      newCategories.category2 = '';
    } else if (newCategories.category3 === name) {
      newCategories.category3 = '';
    } else {
      // 빈 슬롯을 찾아서 새로운 항목을 추가한다.
      if (!newCategories.category1) {
        newCategories.category1 = name;
      } else if (!newCategories.category2) {
        newCategories.category2 = name;
      } else if (!newCategories.category3) {
        newCategories.category3 = name;
      }
    }

    onUpdateCategories(newCategories);
  };

  return (
    <ul css={ulStyle}>
      {(categories || []).map((category, i) => (
        <li key={i} css={liStyle} onClick={() => handleIconClick(category)}>
          {Object.values(selectedCategories).includes(category)
            ? activeCategoryIcon[category]
            : inactiveCategoryIcon[category]}
          <label css={labelStyle}>{CATEGORY_NAME[category]}</label>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelectBox;
