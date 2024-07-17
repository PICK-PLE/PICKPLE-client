import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { useAtom } from 'jotai';
import { classPostAtom } from 'src/stores/classPostData';
import { ClassPostDataType } from 'src/stores/types/classPostDataType';

dayjs.locale('ko');

const useClassPostInputChange = () => {
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

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format('YYYY.MM.DD');
      const dayOfWeek = date.format('ddd'); // 예: '일', '월', '화', '수', '목', '금', '토'
      setClassPostState((prevState) => ({
        ...prevState,
        date: formattedDate,
        dayOfWeek: dayOfWeek,
      }));
    }
  };

  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof ClassPostDataType['questionList']
  ) => {
    const value = e.target.value;
    setClassPostState((prevState) => ({
      ...prevState,
      questionList: {
        ...prevState.questionList,
        [key]: value,
      },
    }));
  };

  const handleImageList = (imageUrlList: string[]) => {
    setClassPostState((prevState) => ({
      ...prevState,
      imageList: imageUrlList,
    }));
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
    handleDateChange,
    handleQuestionChange,
    handleImageList,
  };
};

export default useClassPostInputChange;