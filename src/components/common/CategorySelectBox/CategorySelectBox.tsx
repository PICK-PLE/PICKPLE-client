import { CATEGORY_ICON } from '@constants';
import { imgStyle, labelStyle, liStyle, ulStyle } from './CategorySelectBox.style';

const categoryIcons = [
  {
    name: 'njob',
    title: 'N잡',
    stroke: CATEGORY_ICON.njob.stroke,
    stroke_selected: CATEGORY_ICON.njob.stroke_selected,
  },
  {
    name: 'investment',
    title: '재테크',
    stroke: CATEGORY_ICON.investment.stroke,
    stroke_selected: CATEGORY_ICON.investment.stroke_selected,
  },
  {
    name: 'startup',
    title: '창업',
    stroke: CATEGORY_ICON.startup.stroke,
    stroke_selected: CATEGORY_ICON.startup.stroke_selected,
  },
  {
    name: 'employment',
    title: '취업',
    stroke: CATEGORY_ICON.employment.stroke,
    stroke_selected: CATEGORY_ICON.employment.stroke_selected,
  },
  {
    name: 'productivity',
    title: '생산성',
    stroke: CATEGORY_ICON.productivity.stroke,
    stroke_selected: CATEGORY_ICON.productivity.stroke_selected,
  },
  {
    name: 'lifestyle',
    title: '라이프',
    stroke: CATEGORY_ICON.lifestyle.stroke,
    stroke_selected: CATEGORY_ICON.lifestyle.stroke_selected,
  },
  {
    name: 'health',
    title: '건강',
    stroke: CATEGORY_ICON.health.stroke,
    stroke_selected: CATEGORY_ICON.health.stroke_selected,
  },
  {
    name: 'mind',
    title: '마인드',
    stroke: CATEGORY_ICON.mind.stroke,
    stroke_selected: CATEGORY_ICON.mind.stroke_selected,
  },
  {
    name: 'hobby',
    title: '취미',
    stroke: CATEGORY_ICON.hobby.stroke,
    stroke_selected: CATEGORY_ICON.hobby.stroke_selected,
  },
  {
    name: 'language',
    title: '외국어',
    stroke: CATEGORY_ICON.language.stroke,
    stroke_selected: CATEGORY_ICON.language.stroke_selected,
  },
];

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
                ? category.stroke_selected
                : category.stroke
            }
            alt={category.name}
            css={imgStyle}
            onClick={() => handleIconClick(category.name)}
          />
          <label css={labelStyle}>{category.title}</label>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelectBox;
