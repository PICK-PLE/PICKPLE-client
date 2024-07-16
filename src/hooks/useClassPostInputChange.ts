import { useAtom } from 'jotai';
import { classPostAtom } from 'src/stores/classPostData';
import { ClassPostDataType } from 'src/stores/types/classPostDataType';

export const useClassPostInputChange = () => {
  const [classPostState, setClassPostState] = useAtom(classPostAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ClassPostDataType
  ) => {
    const value = e.target.value;
    setClassPostState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleCategoryChange = (newCategories: ClassPostDataType['categoryList']) => {
    setClassPostState((prevState) => ({
      ...prevState,
      categoryList: newCategories,
    }));
  };

  const toggleIsOffline = () => {
    setClassPostState((prevState) => ({
      ...prevState,
      isOffline: !prevState.isOffline,
    }));
  };

  const handleMaxGuestChange = (newMaxGuest: ClassPostDataType['maxGuest']) => {
    setClassPostState((prevState) => ({
      ...prevState,
      maxGuest: newMaxGuest,
    }));
  };

  const handleAmountChange = (newFee: ClassPostDataType['fee']) => {
    setClassPostState((prevState) => ({
      ...prevState,
      fee: newFee,
    }));
  };

  const handleSelectChange = (value: ClassPostDataType['onlineSpot']) => {
    setClassPostState((prevState) => ({
      ...prevState,
      onlineSpot: value,
    }));
  };

  const handleAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof ClassPostDataType['accountList']
  ) => {
    const value = e.target.value;
    setClassPostState((prevState) => ({
      ...prevState,
      accountList: {
        ...prevState.accountList,
        [key]: value,
      },
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
      const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
      setClassPostState((prevState) => ({
        ...prevState,
        date: formattedDate,
        dayOfWeek: dayOfWeek,
      }));
    }
  };

  return {
    classPostState,
    handleInputChange,
    handleCategoryChange,
    toggleIsOffline,
    handleMaxGuestChange,
    handleAmountChange,
    handleSelectChange,
    handleAccountChange,
    handleDateChange
  };
};