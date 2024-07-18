import { Button } from '@components';
import {
  buttonWrapper,
  cancelButtonStyle,
  layoutStyle,
  subTitleStyle,
  textWrapperStyle,
  titleStyle,
} from './LogoutModal.style';
import { usePostLogout } from '@apis/domains/user';

interface LogoutModalProps {
  onClose: () => void;
}

const LogoutModal = ({ onClose }: LogoutModalProps) => {
  const { mutate } = usePostLogout();

  const handleLogoutClick = () => {
    mutate();
  };
  return (
    <article css={layoutStyle}>
      <section css={textWrapperStyle}>
        <h1 css={titleStyle}>로그아웃</h1>
        <span css={subTitleStyle}>정말 로그아웃 하시겠어요?</span>
      </section>
      <section css={buttonWrapper}>
        <Button variant="xSmall" onClick={onClose} customStyle={cancelButtonStyle}>
          취소
        </Button>
        <Button variant="xSmall" onClick={handleLogoutClick}>
          로그아웃
        </Button>
      </section>
    </article>
  );
};

export default LogoutModal;
