import { graphicImage } from '@constants';
import {
  emptyClassContainer,
  emptyClassImageStyle,
  emptyClassTextStyle,
  emptyClassTextWrapper,
} from '@pages/host/components/HostClassEmptyView/HostClassEmptyView.style';

const HostClassEmptyView = () => {
  return (
    <article>
      <div css={emptyClassContainer}>
        <img css={emptyClassImageStyle} src={graphicImage.GuestMyPageImage} alt="review graphics" />
        <div css={emptyClassTextWrapper}>
          <p css={emptyClassTextStyle}>스픽커가 클래스를</p>
          <p css={emptyClassTextStyle}>준비하고 있어요!</p>
        </div>
      </div>
    </article>
  );
};

export default HostClassEmptyView;
