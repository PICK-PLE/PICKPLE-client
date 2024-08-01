import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


import { Button, LogoHeader } from '@components';
import { graphicImage, routePath } from '@constants';

import {
  buttonStyle,
  errorBox,
  errorIconStyle,
  errorWrapper,
  textStyle,
  errorContainer,
} from './Error.style';

const Error = () => {
  const navigate = useNavigate();
  const { reset } = useQueryErrorResetBoundary();

  const handleButtonClick = () => {
    navigate(routePath.HOME, {
      replace: true,
    });
    reset();
  };

  return (
    <>
      <LogoHeader isIcon={false} />
      <div css={errorContainer}>
        <section css={errorWrapper}>
          <img src={graphicImage.ErrorImage} alt="에러 아이콘" css={errorIconStyle} />
          <div css={errorBox}>
            <p css={textStyle}>오류가 발생했어요</p>
            <p css={textStyle}>잠시 후 다시 시도해 주세요</p>
          </div>
          <div css={buttonStyle}>
            <Button variant="round" onClick={handleButtonClick}>
              홈으로 돌아가기
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;
