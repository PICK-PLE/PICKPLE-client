import { ClassPostDataType } from 'src/stores/types/classPostDataType';

type Category = ClassPostDataType['categoryList'];
type Account = ClassPostDataType['accountList'];

export const useClassPostInputValidation = () => {
  const validateLength = (answer: string | number) => {
    return typeof answer === 'string' ? answer.trim().length >= 1 : answer > 1;
  };
  const validateCategory = (category: Category) => {
    return !!category.category1 || !!category.category2 || !!category.category3;
  };
  const validateAccount = (account: Account) => {
    return !!account.holder && !!account.bank && !!account.accountNumber;
  };

  const validateStepOne = (state: {
    categoryList: Category;
    isOffline: boolean;
    offlineSpot: string;
    onlineSpot: string;
    date: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    maxGuest: number;
    fee: number;
    accountList: Account;
  }) => {
    const isCategoryValid = validateCategory(state.categoryList);
    const isOffline = true;
    const isSpotValid = validateLength(state.offlineSpot) || validateLength(state.onlineSpot);
    const isDateValid = validateLength(state.date);
    const isDayOfWeekValid = validateLength(state.dayOfWeek);
    const isStartTimeValid = validateLength(state.startTime);
    const isEndTimeValid = validateLength(state.endTime);
    const isMaxGuestValid = validateLength(state.maxGuest);
    const isFeeValid = validateLength(state.fee);
    const isAccountValid = validateAccount(state.accountList);
    const isAllValid =
      isCategoryValid &&
      isOffline &&
      isSpotValid &&
      isDateValid &&
      isDayOfWeekValid &&
      isStartTimeValid &&
      isEndTimeValid &&
      isMaxGuestValid &&
      isFeeValid &&
      isAccountValid;

    return {
      isCategoryValid,
      isOffline,
      isSpotValid,
      isDateValid,
      isStartTimeValid,
      isEndTimeValid,
      isMaxGuestValid,
      isFeeValid,
      isAccountValid,
      isAllValid,
    };
  };
  return {
    validateLength,
    validateCategory,
    validateAccount,
    validateStepOne,
  };
};
