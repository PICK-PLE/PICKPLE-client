const authPages = {
  LOGIN: '/login',
  KAKAO_REDIRECTION: '/kakao/redirection',
};

const homePages = {
  HOME: '/',
};

const classListPages = {
  CLASS_LIST: '/class-list',
};

const classPages = {
  CLASS_DETAIL: '/class/:moimId',
  CLASS_NOTICE_POST: '/class/:moimId/notice/post',
  CLASS_POST: '/class/post/:step',
  CLASS_APPLY: '/class/:moimId/apply',
};

const myPagePages = {
  HOST_MYPAGE: '/mypage/host',
  GUEST_MYPAGE: '/mypage/guest',
};

const guestPages = {
  GUEST_MY_CLASS: '/mypage/guest/myclass',
};

const hostPages = {
  HOST_MY_CLASS: '/mypage/host/myclass',
  HOST_MY_CLASS_MANAGE: '/mypage/host/myclass/manage/:moimId',
  HOST_APPLY: '/host/apply/:step',
  HOST_INFO: '/mypage/host/info',
};

const devPages = {
  DEV_COMPONENTS: '/dev/components',
  DEV_CARD: '/dev/card',
};

const errorPages = {
  ERROR: '/error',
};

const adminPages = {
  ADMIN: '/pickple-admin',
};

export default {
  ...authPages,
  ...homePages,
  ...classListPages,
  ...classPages,
  ...myPagePages,
  ...guestPages,
  ...hostPages,
  ...devPages,
  ...errorPages,
  ...adminPages,
};
