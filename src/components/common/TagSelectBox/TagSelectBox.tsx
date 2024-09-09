import { useAtom } from 'jotai';

import { useToast } from '@hooks';
import { hostTagsAtom, moimTagsAtom } from 'src/stores/tagList';

import { buttonStyle, selectedStyle, tagWrapper, unSelectedStyle } from './TagSelectBox.style';
import Toast from '../Toast/Toast';

interface TagSelectBoxProps {
  tagList: string[] | undefined;
  maxSelection: number;
  tagType: 'moim' | 'host';
}

const TagSelectBox = ({ tagList, maxSelection, tagType }: TagSelectBoxProps) => {
  const { showToast, isToastVisible } = useToast();
  // const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const [selectedTagList, setSelectedTagList] = useAtom(
    tagType === 'moim' ? moimTagsAtom : hostTagsAtom
  );

  const handleTagClick = (tag: string) => {
    if (selectedTagList.includes(tag)) {
      setSelectedTagList(selectedTagList.filter((selectedTag) => selectedTag !== tag));
    } else {
      if (selectedTagList.length < maxSelection) {
        setSelectedTagList([...selectedTagList, tag]);
      } else {
        showToast();
      }
    }
  };
  return (
    <>
      <div css={tagWrapper}>
        {tagList &&
          tagList.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              css={[buttonStyle, selectedTagList.includes(tag) ? selectedStyle : unSelectedStyle]}>
              {tag}
            </button>
          ))}
      </div>
      <Toast isVisible={isToastVisible} toastBottom={3} toastIcon={true}>
        {tagType === 'moim'
          ? '클래스 태그는 최대 3개까지 선택할 수 있어요.'
          : '스픽커 태그는 최대 3개까지 선택할 수 있어요.'}
      </Toast>
    </>
  );
};

export default TagSelectBox;
