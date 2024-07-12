import { IcHome } from '@svg';
import {
  centerWrapper,
  headerContainer,
  headerTitle,
  iconContainer,
  leftWrapper,
  rightWrapper,
} from './Header.style';
import { useEasyNavigate } from '@hooks';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { goHome } = useEasyNavigate();
  return (
    <header css={headerContainer}>
      <section css={leftWrapper}></section>
      <section css={centerWrapper}>
        <h4 css={headerTitle}>{title}</h4>
      </section>
      <section css={rightWrapper}>
        <IcHome css={iconContainer} onClick={goHome} />
      </section>
    </header>
  );
};

export default Header;
