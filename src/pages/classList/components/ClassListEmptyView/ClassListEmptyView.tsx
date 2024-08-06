import { graphicImage } from '@constants';

import { categoryEmptyViewContainer, imageStyle, textStyle } from './ClassListEmptyView.style';

const ClassListEmptyView = () => {
  return (
    <section css={categoryEmptyViewContainer}>
      <img css={imageStyle} src={graphicImage.GuestMyPageWhite} alt="HostMyPageImage" />
      <p css={textStyle}>호스트가 모임을 준비하고 있어요!</p>
      <p css={textStyle}>다른 모임을 둘러볼까요?</p>
    </section>
  );
};

export default ClassListEmptyView;
