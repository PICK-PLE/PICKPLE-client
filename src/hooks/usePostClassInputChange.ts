import { components } from '@schema';
import { useAtom } from 'jotai';
import { classPostAtom } from 'src/stores/classPostData';

export const usePostClassInputChange = () => {
  const [classPostState, setClassPostState] = useAtom(classPostAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof components['schemas']['MoimCreateRequest']
  ) => {
    const value = e.target.value;
    setClassPostState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleCategoryChange = (newCategories: components['schemas']['MoimCreateRequest']) => {
    setClassPostState((prevState) => ({
      ...prevState,
      categoryList: newCategories,
    }));
  };

  return {
    classPostState,
    handleInputChange,
    handleCategoryChange
  }
};
