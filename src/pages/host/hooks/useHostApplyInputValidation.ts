const useHostApplyInputValidation = () => {
  const validateLength = (answer: string) => {
    return answer.trim().length >= 1;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUrl = (q3: string) => {
    const urlPattern = /^https:\/\/www\.[\w-]+(\.[\w-]+)+\/?([^\s]*)?$/i;
    return urlPattern.test(q3);
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
    userKeyword: string;
    plan: string;
    email: string;
  }) => {
    const isNicknameValid = validateLength(state.nickname);
    const isUserKeywordvalid = validateLength(state.userKeyword);
    const isPlanValid = validateLength(state.plan);
    const isEmailValid = validateEmail(state.email);
    const isAllValid = isNicknameValid && isPlanValid && isEmailValid && isUserKeywordvalid;

    return {
      isNicknameValid,
      isUserKeywordvalid,
      isPlanValid,
      isEmailValid,
      isAllValid,
    };
  };

  return {
    validateLength,
    validateEmail,
    validateUrl,
    validateStepOne,
    validateStepTwo,
  };
};

export default useHostApplyInputValidation;
