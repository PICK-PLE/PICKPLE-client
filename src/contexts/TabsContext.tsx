import { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProviderProps {
  children: ReactNode;
}

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs should be used within a TabsProvider');
  }
  return context;
};

export const TabsProvider = ({ children }: TabsProviderProps) => {
  const [currentTab, setCurrentTab] = useState('');

  return (
    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>{children}</TabsContext.Provider>
  );
};
