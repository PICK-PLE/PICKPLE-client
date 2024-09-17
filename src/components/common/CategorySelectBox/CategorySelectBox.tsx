import { useFetchMoimCategories } from '@apis/domains/moim';

import { CATEGORY_ICON, CATEGORY_NAME } from '@constants';

import { imgStyle, labelStyle, liStyle, ulStyle } from './CategorySelectBox.style';
interface Category {
  category1: string;
  category2?: string;
  category3?: string;
}

interface CategorySelectBoxProps {
  selectedCategories: Category;
  onUpdateCategories: (newCategories: Category) => void;
}

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
        <li key={i} css={liStyle}>
          <img
            src={
              Object.values(selectedCategories).includes(category)
                ? CATEGORY_ICON[category].line_active
                : CATEGORY_ICON[category].line_inactive
            }
            alt={category}
            css={imgStyle}
            onClick={() => handleIconClick(category)}
          />
          <label css={labelStyle}>{CATEGORY_NAME[category]}</label>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelectBox;
