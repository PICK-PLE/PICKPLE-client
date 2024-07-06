import { IcHome } from '@svg';
import {
  centerWrapper,
  headerContainer,
  headerTitle,
  iconContainer,
  leftWrapper,
  rightWrapper,
} from './Header.style';

interface HeaderProps {
  title: string;
  onClick?: () => void;
}

const Header = ({ title, onClick }: HeaderProps) => {
  return (
    <header css={headerContainer}>
      <section css={leftWrapper}></section>
      <section css={centerWrapper}>
        <h4 css={headerTitle}>{title}</h4>
      </section>
      <section css={rightWrapper}>
        <IcHome css={iconContainer} onClick={onClick} />
      </section>
    </header>
  );
};

export default Header;
