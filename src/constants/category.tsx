import {
  IcEmploymentActive,
  IcEmploymentBlack,
  IcEmploymentSmall,
  IcHealthActive,
  IcHealthBlack,
  IcHealthSmall,
  IcHobbyActive,
  IcHobbyBlack,
  IcHobbySmall,
  IcInvestmentActive,
  IcInvestmentBlack,
  IcInvestmentSmall,
  IcLanguageActive,
  IcLanguageBlack,
  IcLanguageSmall,
  IcLifestyleActive,
  IcLifestyleBlack,
  IcLifestyleSmall,
  IcMindActive,
  IcMindBlack,
  IcMindSmall,
  IcNjobActive,
  IcNjobBlack,
  IcNjobSmall,
  IcProductivityActive,
  IcProductivityBlack,
  IcProductivitySmall,
  IcStartupActive,
  IcStartupBlack,
  IcStartupSmall,
} from '@svg';
import { ReactNode } from 'react';

interface CategoryIcon {
    [key: string]: { small: ReactNode; active: ReactNode; black: ReactNode};
  }
  
  interface CategoryName {
    [key: string]: string;
  }

export const CATEGORY_ICON: CategoryIcon = {
  njob: {
    small: <IcNjobSmall />,
    active: <IcNjobActive />,
    black: <IcNjobBlack />,
  },
  investment: {
    small: <IcInvestmentSmall />,
    active: <IcInvestmentActive />,
    black: <IcInvestmentBlack />,
  },
  startup: {
    small: <IcStartupSmall />,
    active: <IcStartupActive />,
    black: <IcStartupBlack />,
  },
  employment: {
    small: <IcEmploymentSmall />,
    active: <IcEmploymentActive />,
    black: <IcEmploymentBlack />,
  },
  productivity: {
    small: <IcProductivitySmall />,
    active: <IcProductivityActive />,
    black: <IcProductivityBlack />,
  },
  health: {
    small: <IcHealthSmall />,
    active: <IcHealthActive />,
    black: <IcHealthBlack />,
  },
  lifestyle: {
    small: <IcLifestyleSmall />,
    active: <IcLifestyleActive />,
    black: <IcLifestyleBlack />,
  },
  mind: {
    small: <IcMindSmall />,
    active: <IcMindActive />,
    black: <IcMindBlack />,
  },
  hobby: {
    small: <IcHobbySmall />,
    active: <IcHobbyActive />,
    black: <IcHobbyBlack />,
  },
  language: {
    small: <IcLanguageSmall />,
    active: <IcLanguageActive />,
    black: <IcLanguageBlack />,
  },
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
