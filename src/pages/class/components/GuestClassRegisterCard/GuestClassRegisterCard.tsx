import { useFetchSubmittedMoimDetail } from '@apis/domains/moim';

import { Modal, Spinner } from '@components';
import Error from '@pages/error/Error';
import { DepositModal } from '@pages/guest/components';
import { IcDate, IcOffline, IcOneline } from '@svg';
import Image from 'src/components/common/Image/Image';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';

import {
  cardContainerStyle,
  dividerStyle,
  feeSpanStyle,
  feeStyle,
  feeWrapperStyle,
  headSectionStyle,
  iconAndSpanStyle,
  iconStyle,
  imageStyle,
  spotAndDateSectionStyle,
  textSpanStyle,
  titleAndProfileWrapperStyle,
  titleStyle,
} from './GuestClassRegisterCard.style';

export interface GuestClassRegisterCardProps {
  moimId: string;
  isModalOpen?: boolean;
  handleModalClose?: () => void;
  handlePageChange?: () => void;
}

const GuestClassRegisterCard = ({
  moimId,
  isModalOpen,
  handleModalClose = () => {},
  handlePageChange = () => {},
}: GuestClassRegisterCardProps) => {
  const { data: appliedMoimData, isLoading } = useFetchSubmittedMoimDetail(Number(moimId));

  if (isLoading) {
    return <Spinner />;
  }

  if (!appliedMoimData) {
    return <Error />;
  }

  const { title, hostNickname, isOffline, spot, dateList, fee, hostImageUrl, moimImageUrl } =
    appliedMoimData;
  const { date, dayOfWeek, startTime, endTime } = dateList ?? {};

  const handleBackdropClick = () => {
    handleModalClose();
  };

  const handleButtonClick = () => {
    handleModalClose();
  };

  return (
    <article css={cardContainerStyle}>
      <section css={headSectionStyle}>
        <Image width="8.4rem" src={moimImageUrl ?? ''} customStyle={imageStyle} />
        <div css={titleAndProfileWrapperStyle}>
          <h4 css={titleStyle}>{title}</h4>
          <SimpleUserProfile username={hostNickname ?? ''} size="small" userImgUrl={hostImageUrl} />
        </div>
      </section>
      <section css={spotAndDateSectionStyle}>
        <div css={iconAndSpanStyle}>
          <span css={iconStyle}>{isOffline ? <IcOffline /> : <IcOneline />}</span>
          <span css={textSpanStyle}>{spot}</span>
        </div>
        <div css={iconAndSpanStyle}>
          <span css={iconStyle}>
            <IcDate />
          </span>
          <span css={textSpanStyle}>{`${date}. (${dayOfWeek}) ${startTime} - ${endTime}`}</span>
        </div>
      </section>
      <span css={dividerStyle} />
      <section css={feeWrapperStyle}>
        <span css={feeSpanStyle}>참가비</span>
        <span css={feeStyle}>{fee?.toLocaleString()}원</span>
      </section>

      {isModalOpen && (
        <Modal onClose={handleBackdropClick}>
          <DepositModal
            onClose={handleButtonClick}
            fee={fee ?? 0}
            handlePageChange={handlePageChange}
          />
        </Modal>
      )}
    </article>
  );
};

export default GuestClassRegisterCard;
