import { Button, Header, Image, Input, TextArea } from '@components';
import { images } from '@constants';
import {
  hostInfoContainer,
  hostInfoLayout,
  hostInputContainer,
  hostInputWrapper,
} from '@pages/host/page/HostInfoEditPage/HostInfoEditPage.style';
import {
  hostBackgroundImage,
  hostImageWrapper,
  hostProfileImage,
} from '@pages/host/page/HostInfoPage/HostInfoPage.style';

const HostInfoEditPage = () => {
  // 호스트 목데이터
  const hostData = {
    nickName: '채연',
    profileUrl: null,
    count: 2,
    keyword: '10년차 요리 전문가',
    description: '안녕하세요, 스픽커 그것은입니다.',
    socialLink: 'example.com',
  };

  const { nickName, profileUrl, keyword, description, socialLink } = hostData;

  const handleNickNameInputChange = () => {};
  return (
    <div>
      <Header title="프로필 관리" isLine={true} />
      <div css={hostInfoLayout}>
        <section css={hostInfoContainer}>
          <div css={hostImageWrapper}>
            <Image src={images.HostBackGroundImage} customStyle={hostBackgroundImage} />
            <div css={hostProfileImage}>
              <Image
                src={profileUrl ? profileUrl : images.HostProfileImage}
                variant="round"
                width="8.2rem"
              />
            </div>
          </div>
        </section>

        <section css={hostInputContainer}>
          <div css={hostInputWrapper}>
            <Input
              value={nickName}
              onChange={handleNickNameInputChange}
              inputLabel="닉네임"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="닉네임을 입력해주세요"
              isCountValue
            />

            <Input
              value={keyword}
              onChange={handleNickNameInputChange}
              inputLabel="키워드"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="닉네임을 입력해주세요"
              isCountValue
            />

            <div>
              <span>소개글</span>
              <TextArea
                value={description}
                onChange={handleNickNameInputChange}
                errorMessage="* 필수 입력 항목이에요."
                maxLength={70}
                placeholder="닉네임을 입력해주세요"
                isValid
              />
            </div>

            <Input
              value={socialLink}
              onChange={handleNickNameInputChange}
              inputLabel="소셜 링크"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="닉네임을 입력해주세요"
              isCountValue
            />
          </div>

          <Button variant="small">저장하기</Button>
        </section>
      </div>
    </div>
  );
};

export default HostInfoEditPage;
