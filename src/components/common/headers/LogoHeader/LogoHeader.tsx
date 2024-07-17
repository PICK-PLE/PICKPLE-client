import { IcLogo, IcPerson } from '@svg';
import { logoHeaderWrapper, iconStyle, logoWrapper } from './LogoHeader.style';
import { useEasyNavigate } from '@hooks';

interface LogoHeaderProps {
  isIcon?: boolean;
}

const LogoHeader = ({ isIcon = true }: LogoHeaderProps) => {
  const { goHome, goGuestMyPage } = useEasyNavigate();

  return (
    <header css={logoHeaderWrapper}>
      <div css={logoWrapper}>
        <IcLogo onClick={goHome} />
      </div>
      {isIcon && <IcPerson onClick={goGuestMyPage} css={iconStyle} />}
    </header>
  );
};

export default LogoHeader;
