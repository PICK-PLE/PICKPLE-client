import { CATEGORY_ICON } from '@constants';
import { imgStyle, labelStyle, liStyle, ulStyle } from './CategorySelectBox.style';

const categoryIcons = [
  {
    name: 'N잡',
    stroke: CATEGORY_ICON.njob.stroke,
    fill: CATEGORY_ICON.njob.fill,
  },
  {
    name: '재테크',
    stroke: CATEGORY_ICON.investment.stroke,
    fill: CATEGORY_ICON.investment.fill,
  },
  {
    name: '창업',
    stroke: CATEGORY_ICON.startup.stroke,
    fill: CATEGORY_ICON.startup.fill,
  },
  {
    name: '취업',
    stroke: CATEGORY_ICON.employment.stroke,
    fill: CATEGORY_ICON.employment.fill,
  },
  {
    name: '생산성',
    stroke: CATEGORY_ICON.productivity.stroke,
    fill: CATEGORY_ICON.productivity.fill,
  },
  {
    name: '건강',
    stroke: CATEGORY_ICON.lifestyle.stroke,
    fill: CATEGORY_ICON.lifestyle.fill,
  },
  {
    name: '라이프',
    stroke: CATEGORY_ICON.health.stroke,
    fill: CATEGORY_ICON.health.fill,
  },
  {
    name: '마인드',
    stroke: CATEGORY_ICON.mind.stroke,
    fill: CATEGORY_ICON.mind.fill,
  },
  {
    name: '취미',
    stroke: CATEGORY_ICON.hobby.stroke,
    fill: CATEGORY_ICON.hobby.fill,
  },
  {
    name: '외국어',
    stroke: CATEGORY_ICON.language.stroke,
    fill: CATEGORY_ICON.language.fill,
  },
];

interface Category {
  category1: string;
  category2?: string;
  category3?: string;
}

interface CategorySelectBoxProps {
  selectedCategories: Category
  onUpdateCategories: (newCategories: Category) => void;
}

const CategorySelectBox = ({
  selectedCategories = { category1: '', category2: '', category3: '' },
  onUpdateCategories,
}: CategorySelectBoxProps) => {
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
      {categoryIcons.map((category, i) => (
        <li key={i} css={liStyle}>
          <img
            src={
              Object.values(selectedCategories).includes(category.name)
                ? category.fill
                : category.stroke
            }
            alt={category.name}
            css={imgStyle}
            onClick={() => handleIconClick(category.name)}
          />
          <label css={labelStyle}>{category.name}</label>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelectBox;
