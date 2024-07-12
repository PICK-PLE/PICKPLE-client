import { useState } from 'react';
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

const CategorySelectBox = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleIconClick = (name: string) => {
    // 이미 선택되어있으면 뺀다.
    if (selectedCategories.includes(name)) {
      setSelectedCategories(selectedCategories.filter((category) => category !== name));
      return;
    }

    // 선택 안된 카테고리 & 선택된게 3개보다 적으면 추가한다.
    if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, name]);
      return;
    }
  };

  console.log(selectedCategories);

  return (
    <ul css={ulStyle}>
      {categoryIcons.map((category, i) => (
        <li key={i} css={liStyle}>
          <img
            src={selectedCategories.includes(category.name) ? category.fill : category.stroke}
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
