import { Button, LogoHeader } from '@components';
import { buttonStyle, errorBox, errorIconStyle, errorWrapper, textStyle } from './Error.style';
import { graphicImage } from '@constants';
import { useEasyNavigate } from '@hooks';

const Error = () => {
  const { goHome } = useEasyNavigate();
  return (
    <>
      <LogoHeader isIcon={false} />

      <section css={errorWrapper}>
        <img src={graphicImage.ErrorImage} alt="에러 아이콘" css={errorIconStyle} />
        <div css={errorBox}>
          <p css={textStyle}>오류가 발생했어요</p>
          <p css={textStyle}>잠시 후 다시 시도해 주세요</p>
        </div>
        <div css={buttonStyle}>
          <Button variant="round" onClick={goHome}>
            홈으로 돌아가기
          </Button>
        </div>
      </section>
    </>
  );
};

export default Error;
