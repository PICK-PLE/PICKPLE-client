import { useEasyNavigate } from '@hooks';
import { IcLogo, IcMypage } from '@svg';

import { logoHeaderWrapper, iconStyle, logoWrapper } from './LogoHeader.style';

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
      {isIcon && <IcMypage onClick={goGuestMyPage} css={iconStyle} />}
    </header>
  );
};

export default LogoHeader;
