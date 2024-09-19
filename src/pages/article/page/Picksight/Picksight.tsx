import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Header, Image } from '@components';
import ArticleParagraph from '@pages/article/components/ArticleParagraph/ArticleParagraph';
import { IcDropdownRight } from '@svg';
import { smoothScroll } from '@utils';
import Footer from 'src/components/common/Footer/Footer';
import { PicksightImage, PicksightMain } from 'src/constants/images';

import {
  articleH1,
  articleH2,
  articleHeader,
  articleMain,
  articleStrong,
  articleSubtitle,
  buttonIcon,
  paragraphStyle,
} from './Picksight.style';

const Picksight = () => {
  const navigate = useNavigate();

  useEffect(() => {
    smoothScroll(0, false);
  }, []);

  const handleSpickerApplyClick = () => {
    navigate('/mypage/host');
  };
  const handleClassApplyClick = () => {
    navigate('/class-list');
  };
  return (
    <>
      <Header title="픽사이트" />
      <main css={articleMain}>
        <div css={articleHeader}>
          <h2 css={articleH2}>1호 스픽커가 알려주는</h2>
          <h1 css={articleH1}>픽플 사용설명서</h1>
        </div>
        <Image src={PicksightMain} width="100%" />

        <div css={paragraphStyle}>
          <ArticleParagraph
            title="픽플은 내가 가진 지식과 경험을 이야기하고 공유할 수 있는 곳이에요."
            content={`내가 가진 지식과 경험이, 누군가에게는 큰 인사이트가 되고, 힘이 될 수 있어요. 관심 분야에 대해 배우고 싶지만, 형식적인 분위기 속에서 긴 시간을 투자해야 하는 강의가 부담스럽게 느껴졌다면 픽플에 찾아와 주세요. \n픽플에서는 스픽커의 지식과 경험을 소규모로 공유 받으며, 배움의 즐거움과 네트워킹의 즐거움을 모두 얻을 수 있답니다.`}
          />
        </div>
        <h3 css={articleSubtitle}>
          픽플에는 <strong css={articleStrong}>스픽커</strong>와
          <strong css={articleStrong}>참가자</strong>가 있어요.
        </h3>
        <Image src={PicksightImage} width="100%" />

        <div css={paragraphStyle}>
          <ArticleParagraph
            title="스픽커는요,"
            content={`평소에 나의 이야기를 하는 것에 즐거움을 느낀 적이 있는 분이라면, 누구나 스픽커가 될 수 있어요.\n다만, 픽플은 관심사에 대한 스픽커님의 깊은 몰입 정도를 파악하기 위해 개인 페이지 링크를 요청 드리고 있어요.\n개인 페이지를 열심히 관리하고 계신 분이었다면, 픽플의 스픽커 소개페이지에 개인 페이지 링크도 홍보할 수 있으니 스픽커님께도 픽플이 매우 좋은 홍보 수단이 될 수 있기를 바랄게요.`}
          />
          <Button variant="stroke" onClick={handleSpickerApplyClick}>
            <span>스픽커 신청하러 가기</span>
            <IcDropdownRight css={buttonIcon} />
          </Button>
        </div>
        <div css={paragraphStyle}>
          <ArticleParagraph
            title="참가자는요,"
            content={`스픽커로부터 듣고 싶은 이야기가 있는 분이라면 누구나 참가자가 될 수 있어요.\n퇴근 후 여유 시간과, 모처럼 약속이 없어 한가로운 주말을 의미 있게 보내고 싶으시다면 배움과 네트워킹을 모두 얻을 수 있는 픽플의 클래스 모임은 어떠세요?\n스픽커로부터 공유 받은 지식과 경험을 나의 삶과 엮게 된다면 더욱 유익한 클래스가 될 거예요!`}
          />
          <Button variant="stroke" onClick={handleClassApplyClick}>
            <span>클래스 모임 참여하러 가기</span>
            <IcDropdownRight css={buttonIcon} />
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Picksight;
