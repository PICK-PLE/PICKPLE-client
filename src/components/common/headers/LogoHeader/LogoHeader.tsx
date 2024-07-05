import { IcLogo, IcPerson } from '@svg';
import { LogoWrapper, logoHeaderWrapper, iconWrapper } from './LogoHeader.style';

interface LogoHeaderProps {
  leftOnClick?: () => void;
  rightOnClick?: () => void;
}

const LogoHeader = ({ leftOnClick, rightOnClick }: LogoHeaderProps) => {
  return (
    <header css={logoHeaderWrapper}>
      <div css={LogoWrapper}>
        <IcLogo onClick={leftOnClick} />
      </div>
      <div css={iconWrapper}>
        <IcPerson onClick={rightOnClick} />
      </div>
    </header>
  );
};

export default LogoHeader;
