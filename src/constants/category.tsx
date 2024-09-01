import { ReactNode } from 'react';

import {
  IcEmploymentSmall,
  IcHealthSmall,
  IcHobbySmall,
  IcInvestmentSmall,
  IcLanguageSmall,
  IcLifestyleSmall,
  IcMindSmall,
  IcNjobSmall,
  IcProductivitySmall,
  IcStartupSmall,
} from '@svg';

interface CategoryIcon {
  [key: string]: {
    fill_selected: string;
    fill: string;
    stroke_selected: string;
    stroke: string;
  };
}

interface CategoryName {
  [key: string]: string;
}

interface CategorySmallIconType {
  [key: string]: ReactNode;
}

export const CATEGORY_ICON: CategoryIcon = {
  njob: {
    fill_selected: '/image/fill-selected/image_njob_fill_selected.png',
    fill: '/image/fill/image_njob_fill.png',
    stroke_selected: '/image/stroke-selected/image_njob_stroke_selected.png',
    stroke: '/image/stroke/image_njob_stroke.png',
  },
  investment: {
    fill_selected: '/image/fill-selected/image_investment_fill_selected.png',
    fill: '/image/fill/image_investment_fill.png',
    stroke_selected: '/image/stroke-selected/image_investment_stroke_selected.png',
    stroke: '/image/stroke/image_investment_stroke.png',
  },
  startup: {
    fill_selected: '/image/fill-selected/image_startup_fill_selected.png',
    fill: '/image/fill/image_startup_fill.png',
    stroke_selected: '/image/stroke-selected/image_startup_stroke_selected.png',
    stroke: '/image/stroke/image_startup_stroke.png',
  },
  employment: {
    fill_selected: '/image/fill-selected/image_employment_fill_selected.png',
    fill: '/image/fill/image_employment_fill.png',
    stroke_selected: '/image/stroke-selected/image_employment_stroke_selected.png',
    stroke: '/image/stroke/image_employment_stroke.png',
  },
  productivity: {
    fill_selected: '/image/fill-selected/image_productivity_fill_selected.png',
    fill: '/image/fill/image_productivity_fill.png',
    stroke_selected: '/image/stroke-selected/image_productivity_stroke_selected.png',
    stroke: '/image/stroke/image_productivity_stroke.png',
  },
  lifestyle: {
    fill_selected: '/image/fill-selected/image_lifestyle_fill_selected.png',
    fill: '/image/fill/image_lifestyle_fill.png',
    stroke_selected: '/image/stroke-selected/image_lifestyle_stroke_selected.png',
    stroke: '/image/stroke/image_lifestyle_stroke.png',
  },
  health: {
    fill_selected: '/image/fill-selected/image_health_fill_selected.png',
    fill: '/image/fill/image_health_fill.png',
    stroke_selected: '/image/stroke-selected/image_health_stroke_selected.png',
    stroke: '/image/stroke/image_health_stroke.png',
  },
  mind: {
    fill_selected: '/image/fill-selected/image_mind_fill_selected.png',
    fill: '/image/fill/image_mind_fill.png',
    stroke_selected: '/image/stroke-selected/image_mind_stroke_selected.png',
    stroke: '/image/stroke/image_mind_stroke.png',
  },
  hobby: {
    fill_selected: '/image/fill-selected/image_hobby_fill_selected.png',
    fill: '/image/fill/image_hobby_fill.png',
    stroke_selected: '/image/stroke-selected/image_hobby_stroke_selected.png',
    stroke: '/image/stroke/image_hobby_stroke.png',
  },
  language: {
    fill_selected: '/image/fill-selected/image_language_fill_selected.png',
    fill: '/image/fill/image_language_fill.png',
    stroke_selected: '/image/stroke-selected/image_language_stroke_selected.png',
    stroke: '/image/stroke/image_language_stroke.png',
  },
};

export const CATEGORY_SMALL_ICON: CategorySmallIconType = {
  njob: <IcNjobSmall />,
  investment: <IcInvestmentSmall />,
  startup: <IcStartupSmall />,
  employment: <IcEmploymentSmall />,
  productivity: <IcProductivitySmall />,
  lifestyle: <IcLifestyleSmall />,
  health: <IcHealthSmall />,
  mind: <IcMindSmall />,
  hobby: <IcHobbySmall />,
  language: <IcLanguageSmall />,
};

export const CATEGORY_NAME: CategoryName = {
  njob: 'N잡',
  investment: '재테크',
  startup: '창업',
  employment: '취업',
  productivity: '생산성',
  health: '건강',
  lifestyle: '라이프',
  mind: '마인드',
  hobby: '취미',
  language: '외국어',
};
