import { IcLogo, IcPerson } from '@svg';
import { logoHeaderWrapper, iconWrapper, logoWrapper } from './LogoHeader.style';
import { useEasyNavigate } from '@hooks';

const LogoHeader = () => {
  const { goHome, goMyPage } = useEasyNavigate();

  return (
    <header css={logoHeaderWrapper}>
      <div css={logoWrapper}>
        <IcLogo onClick={goHome} />
      </div>
      <div css={iconWrapper}>
        <IcPerson onClick={goMyPage} />
      </div>
    </header>
  );
};

export default LogoHeader;
