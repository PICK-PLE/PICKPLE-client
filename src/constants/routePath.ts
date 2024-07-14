const authPages = {
  LOGIN: '/login',
  KAKAO_REDIRECTION: '/kakao/redirection',
};

const homePages = {
  HOME: '/',
};

const categoriesPages = {
  CATEGORY: '/categories/{category}',
};

const classPages = {
  CLASS: '/class',
  CLASS_NOTICE_POST: '/class/notice/post',
  CLASS_POST: '/class/post',
  CLASS_APPLY_RULE: '/class/apply/rule',
  CLASS_APPLY_QUESTION: '/class/apply/question',
  CLASS_APPLY_DEPOSIT: '/class/apply/deposit',
  CLASS_APPLY_COMPLETE: '/class/apply/complete',
};

const myPagePages = {
  HOST_MYPAGE: '/mypage/host',
  GUEST_MYPAGE: '/mypage/guest',
};

const guestPages = {
  GUEST_MY_CLASS: '/guest/myclass',
};

const hostPages = {
  HOST_MY_CLASS: '/host/myclass',
  HOST_MY_CLASS_MANAGE: '/host/myclass/manage',
  HOST_APPLY: '/host/apply',
};

const devPages = {
  DEV_COMPONENTS: '/dev/components',
  DEV_CARD: '/dev/card',
};

export default {
  ...authPages,
  ...homePages,
  ...categoriesPages,
  ...classPages,
  ...myPagePages,
  ...guestPages,
  ...hostPages,
  ...devPages,
};
