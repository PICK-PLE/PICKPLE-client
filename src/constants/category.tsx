interface CategoryIcon {
  [key: string]: {
    default: string;
    active: string;
    inactive: string;
    line_active: string;
    line_inactive: string;
  };
}

interface CategoryName {
  [key: string]: string;
}

export const CATEGORY_ICON: CategoryIcon = {
  njob: {
    active: '/image/categories/active/image_njob_active.svg',
    default: '/image/categories/default/image_njob_default.svg',
    inactive: '/image/categories/inactive/image_njob_inactive.svg',
    line_active: '/image/categories/line-active/image_njob_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_njob_line_inactive.svg',
  },
  investment: {
    active: '/image/categories/active/image_investment_active.svg',
    default: '/image/categories/default/image_investment_default.svg',
    inactive: '/image/categories/inactive/image_investment_inactive.svg',
    line_active: '/image/categories/line-active/image_investment_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_investment_line_inactive.svg',
  },
  startup: {
    active: '/image/categories/active/image_startup_active.png',
    default: '/image/categories/default/image_startup_default.png',
    inactive: '/image/categories/inactive/image_startup_inactive.png',
    line_active: '/image/categories/line-active/image_startup_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_startup_line_inactive.svg',
  },
  employment: {
    active: '/image/categories/active/image_employment_active.svg',
    default: '/image/categories/default/image_employment_default.svg',
    inactive: '/image/categories/inactive/image_employment_inactive.svg',
    line_active: '/image/categories/line-active/image_employment_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_employment_line_inactive.svg',
  },
  productivity: {
    active: '/image/categories/active/image_productivity_active.svg',
    default: '/image/categories/default/image_productivity_default.svg',
    inactive: '/image/categories/inactive/image_productivity_inactive.svg',
    line_active: '/image/categories/line-active/image_productivity_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_productivity_line_inactive.svg',
  },
  speech: {
    active: '/image/categories/active/image_speech_active.svg',
    default: '/image/categories/default/image_speech_default.svg',
    inactive: '/image/categories/inactive/image_speech_inactive.svg',
    line_active: '/image/categories/line-active/image_speech_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_speech_line_inactive.svg',
  },
  self: {
    active: '/image/categories/active/image_self_active.svg',
    default: '/image/categories/default/image_self_default.svg',
    inactive: '/image/categories/inactive/image_self_inactive.svg',
    line_active: '/image/categories/line-active/image_self_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_self_line_inactive.svg',
  },
  marketing: {
    active: '/image/categories/active/image_marketing_active.svg',
    default: '/image/categories/default/image_marketing_default.svg',
    inactive: '/image/categories/inactive/image_marketing_inactive.svg',
    line_active: '/image/categories/line-active/image_marketing_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_marketing_line_inactive.svg',
  },
  education: {
    active: '/image/categories/active/image_education_active.svg',
    default: '/image/categories/default/image_education_default.svg',
    inactive: '/image/categories/inactive/image_education_inactive.svg',
    line_active: '/image/categories/line-active/image_education_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_education_line_inactive.svg',
  },
  it: {
    active: '/image/categories/active/image_it_active.svg',
    default: '/image/categories/default/image_it_default.svg',
    inactive: '/image/categories/inactive/image_it_inactive.svg',
    line_active: '/image/categories/line-active/image_it_line_active.svg',
    line_inactive: '/image/categories/line-inactive/image_it_line_inactive.svg',
  },
};

export const CATEGORY_NAME: CategoryName = {
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
