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
import { ReactNode } from 'react';
import {
  EmploymentFillImage,
  EmploymentFillSelectedImage,
  EmploymentStrokeImage,
  EmploymentStrokeSelectedImage,
  HealthFillImage,
  HealthFillSelectedImage,
  HealthStrokeImage,
  HealthStrokeSelectedImage,
  HobbyFillImage,
  HobbyFillSelectedImage,
  HobbyStrokeImage,
  HobbyStrokeSelectedImage,
  InvestmentFillImage,
  InvestmentFillSelectedImage,
  InvestmentStrokeImage,
  InvestmentStrokeSelectedImage,
  LanguageFillImage,
  LanguageFillSelectedImage,
  LanguageStrokeImage,
  LanguageStrokeSelectedImage,
  LifestyleFillImage,
  LifestyleFillSelectedImage,
  LifestyleStrokeImage,
  LifestyleStrokeSelectedImage,
  MindFillImage,
  MindFillSelectedImage,
  MindStrokeImage,
  MindStrokeSelectedImage,
  NJobFillImage,
  NJobFillSelectedImage,
  NJobStrokeImage,
  NJobStrokeSelectedImage,
  ProductivityFillImage,
  ProductivityFillSelectedImage,
  ProductivityStrokeImage,
  ProductivityStrokeSelectedImage,
  StartupFillImage,
  StartupFillSelectedImage,
  StartupStrokeImage,
  StartupStrokeSelectedImage,
} from 'src/assets/image';

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
    fill_selected: NJobFillSelectedImage,
    fill: NJobFillImage,
    stroke_selected: NJobStrokeSelectedImage,
    stroke: NJobStrokeImage,
  },
  investment: {
    fill_selected: InvestmentFillSelectedImage,
    fill: InvestmentFillImage,
    stroke_selected: InvestmentStrokeSelectedImage,
    stroke: InvestmentStrokeImage,
  },
  startup: {
    fill_selected: StartupFillSelectedImage,
    fill: StartupFillImage,
    stroke_selected: StartupStrokeSelectedImage,
    stroke: StartupStrokeImage,
  },
  employment: {
    fill_selected: EmploymentFillSelectedImage,
    fill: EmploymentFillImage,
    stroke_selected: EmploymentStrokeSelectedImage,
    stroke: EmploymentStrokeImage,
  },
  productivity: {
    fill_selected: ProductivityFillSelectedImage,
    fill: ProductivityFillImage,
    stroke_selected: ProductivityStrokeSelectedImage,
    stroke: ProductivityStrokeImage,
  },
  lifestyle: {
    fill_selected: LifestyleFillSelectedImage,
    fill: LifestyleFillImage,
    stroke_selected: LifestyleStrokeSelectedImage,
    stroke: LifestyleStrokeImage,
  },
  health: {
    fill_selected: HealthFillSelectedImage,
    fill: HealthFillImage,
    stroke_selected: HealthStrokeSelectedImage,
    stroke: HealthStrokeImage,
  },
  mind: {
    fill_selected: MindFillSelectedImage,
    fill: MindFillImage,
    stroke_selected: MindStrokeSelectedImage,
    stroke: MindStrokeImage,
  },
  hobby: {
    fill_selected: HobbyFillSelectedImage,
    fill: HobbyFillImage,
    stroke_selected: HobbyStrokeSelectedImage,
    stroke: HobbyStrokeImage,
  },
  language: {
    fill_selected: LanguageFillSelectedImage,
    fill: LanguageFillImage,
    stroke_selected: LanguageStrokeSelectedImage,
    stroke: LanguageStrokeImage,
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
