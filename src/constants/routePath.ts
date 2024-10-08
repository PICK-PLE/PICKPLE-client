const authPages = {
  LOGIN: '/login',
  KAKAO_REDIRECTION: '/kakao/redirection',
};

const homePages = {
  HOME: '/',
};

const articlePages = {
  ARTICLE_PICKSIGHT: '/article/picksight',
};

const classListPages = {
  CLASS_LIST: '/class-list',
};

const classPages = {
  CLASS_DETAIL: '/class/:moimId',
  CLASS_NOTICE_POST: '/class/:moimId/notice/post',
  CLASS_POST: '/class/post/:step',
  CLASS_APPLY: '/class/:moimId/apply',
  CLASS_NOTICE_DETAIL: '/class/:moimId/notice/:noticeId',
};

const myPagePages = {
  HOST_MYPAGE: '/mypage/host',
  GUEST_MYPAGE: '/mypage/guest',
};

const guestPages = {
  GUEST_MY_CLASS: '/mypage/guest/myclass',
  GUEST_MY_CLASS_REVIEW_WRITE: '/mypage/guest/myclass/:moimId/review/write',
  GUEST_MY_CLASS_REVIEW_COMPLETE: '/mypage/guest/myclass/:moimId/review/complete',
};

const hostPages = {
  HOST_MY_CLASS: '/mypage/host/myclass',
  HOST_MY_CLASS_MANAGE: '/mypage/host/myclass/manage/:moimId',
  HOST_APPLY: '/host/apply/:step',
  HOST_INFO: '/host/info/:hostId',
  HOST_INFO_EDIT: 'host/info/edit/:hostId',
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
  ...articlePages,
  ...classListPages,
  ...classPages,
  ...myPagePages,
  ...guestPages,
  ...hostPages,
  ...devPages,
  ...errorPages,
  ...adminPages,
};
