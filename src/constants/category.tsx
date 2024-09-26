interface CategoryIcon {
  [key: string]: {
    default: string;
    active: string;
    inactive: string;
  };
}

interface CategoryName {
  [key: string]: string;
}

export const CATEGORY_ICON: CategoryIcon = {
  startup: {
    active: '/image/categories/startup/image_startup_active.png',
    default: '/image/categories/startup/image_startup_default.png',
    inactive: '/image/categories/startup/image_startup_inactive.png',
  },
};

export const CATEGORY_NAME: CategoryName = {
  all: '전체',
  njob: 'N잡',
  investment: '재테크',
  startup: '창업',
  employment: '취업',
  productivity: '생산성',
  speech: '스피치',
  self: '자기계발',
  marketing: '마케팅',
  education: '교육',
  it: 'IT',
};
