import { useState } from 'react';

import { buttonStyle, selectedStyle, tagWrapper, unSelectedStyle } from './TagSelectBox.style';

interface TagSelectBoxProps {
  tagList: string[];
  maxSelection: number;
}

const TagSelectBox = ({ tagList, maxSelection }: TagSelectBoxProps) => {
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (selectedTagList.includes(tag)) {
      setSelectedTagList(selectedTagList.filter((selectedTag) => selectedTag !== tag));
    } else {
      if (selectedTagList.length < maxSelection) {
        setSelectedTagList([...selectedTagList, tag]);
      } else {
        alert('최대 3개 가능'); //추후 api 붙이고나서 지울 예정
      }
    }
  };
  return (
    <div css={tagWrapper}>
      {tagList.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          css={[buttonStyle, selectedTagList.includes(tag) ? selectedStyle : unSelectedStyle]}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagSelectBox;
