import { graphicImage } from '@constants';

import { categoryEmptyViewContainer, imageStyle, textStyle } from './ClassListEmptyView.style';

const ClassListEmptyView = () => {
  return (
    <section css={categoryEmptyViewContainer}>
      <img css={imageStyle} src={graphicImage.GuestMyPageWhite} alt="HostMyPageImage" />
      <p css={textStyle}>스픽커가 클래스를 준비하고 있어요!</p>
      <p css={textStyle}>다른 클래스를 둘러볼까요?</p>
    </section>
  );
};

export default ClassListEmptyView;
