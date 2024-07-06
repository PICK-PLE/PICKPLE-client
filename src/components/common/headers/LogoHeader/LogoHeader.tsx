import { IcLogo, IcPerson } from '@svg';
import { logoHeaderWrapper, iconWrapper, logoWrapper } from './LogoHeader.style';
import { useEasyNavigate } from '@hooks';

interface LogoHeaderProps {
  handleIconClick?: () => void;
}

const LogoHeader = ({ handleIconClick }: LogoHeaderProps) => {
  const { goHome } = useEasyNavigate();

  return (
    <header css={logoHeaderWrapper}>
      <div css={logoWrapper}>
        <IcLogo onClick={goHome} />
      </div>
      <div css={iconWrapper}>
        <IcPerson onClick={handleIconClick} />
      </div>
    </header>
  );
};

export default LogoHeader;
