import { IcLogo, IcPerson } from '@svg';
import { LogoWrapper, logoHeaderWrapper, iconWrapper } from './LogoHeader.style';
import { useNavigate } from 'react-router-dom';

interface LogoHeaderProps {
  handleIconClick?: () => void;
}

const LogoHeader = ({ handleIconClick }: LogoHeaderProps) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };
  return (
    <header css={logoHeaderWrapper}>
      <div css={LogoWrapper}>
        <IcLogo onClick={goHome} />
      </div>
      <div css={iconWrapper}>
        <IcPerson onClick={handleIconClick} />
      </div>
    </header>
  );
};

export default LogoHeader;
