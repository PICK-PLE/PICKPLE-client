import { components } from '@schema';

type Category = components['schemas']['SubmitterCategoryInfo'];

export const useHostApplyInputValidation = () => {
  const validateLength = (answer: string) => {
    return answer.trim().length >= 1;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUrl = (q3: string) => {
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([^\s]*)?$/i;
    return urlPattern.test(q3);
  };

  const validateCategory = (category: Category) => {
    return !!category.category1 || !!category.category2 || !!category.category3;
  };

  const validateStepOne = (state: { intro: string; goal: string; link: string }) => {
    const isIntroValid = validateLength(state.intro);
    const isGoalValid = validateLength(state.goal);
    const isLinkValid = validateUrl(state.link);
    const isAllValid = isIntroValid && isGoalValid && isLinkValid;

    return {
      isIntroValid,
      isGoalValid,
      isLinkValid,
      isAllValid,
    };
  };

  const validateStepTwo = (state: {
    nickname: string;
    plan: string;
    email: string;
    categoryList: Category;
  }) => {
    const isNicknameValid = validateLength(state.nickname);
    const isPlanValid = validateLength(state.plan);
    const isEmailValid = validateEmail(state.email);
    const isCategoryValid = validateCategory(state.categoryList);
    const isAllValid = isNicknameValid && isPlanValid && isEmailValid && isCategoryValid;

    return {
      isNicknameValid,
      isPlanValid,
      isEmailValid,
      isCategoryValid,
      isAllValid,
    };
  };

  return {
    validateLength,
    validateEmail,
    validateUrl,
    validateCategory,
    validateStepOne,
    validateStepTwo,
  };
};
