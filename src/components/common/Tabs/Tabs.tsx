import React, { ReactNode, useEffect } from 'react';
import { useTabs } from 'src/contexts/TabsContext';

interface TabsProps {
  children: ReactNode;
  tabs: { [key: string]: string };
  defaultTab: string;
  onTabSelect?: (tab: string) => void;
  className?: string;
}

export const Tabs = ({
  children,
  tabs,
  defaultTab,
  onTabSelect,
  className,
  ...props
}: TabsProps) => {
  const { currentTab, setCurrentTab } = useTabs();

  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [setCurrentTab, defaultTab]);

  return (
    <div className={`tabs ${className}`} {...props}>
      <ul className="tabs-header">
        {Object.values(tabs).map((tabValue) => (
          <li
            key={tabValue}
            onClick={() => {
              setCurrentTab(tabValue);
              if (onTabSelect) onTabSelect(tabValue);
            }}
            className={`${currentTab === tabValue ? 'active' : ''}`}>
            {tabValue}
          </li>
        ))}
      </ul>
      <div className="tabs-body">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          if (child.type !== Tab) {
            throw new Error('The child components should be of type Tab');
          }
          return child.props.id === currentTab ? child : null;
        })}
      </div>
    </div>
  );
};

interface TabProps {
  children: ReactNode;
  id: string;
}

export const Tab = ({ children, id }: TabProps) => {
  return <section id={id}>{children}</section>;
};
