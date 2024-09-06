import { useState } from 'react';

import { Button, Header, Image, Input, TextArea } from '@components';
import { images } from '@constants';
import {
  hostInfoContainer,
  hostInfoLayout,
  hostInputContainer,
  hostInputWrapper,
  hostTextAreaLabelStyle,
  hostTextAreaWrapper,
} from '@pages/host/page/HostInfoEditPage/HostInfoEditPage.style';
import {
  hostBackgroundImage,
  hostImageWrapper,
  hostProfileImage,
} from '@pages/host/page/HostInfoPage/HostInfoPage.style';

export interface HostInfoDataType {
  nickName: string;
  profileUrl: string;
  count: number;
  keyword: string;
  description: string;
  socialLink: string;
}

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

  const [hostInfoValue, setHostInfoValue] = useState({
    nickName: `${nickName}`,
    keyword: `${keyword}`,
    description: `${description}`,
    socialLink: `${socialLink}`,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof HostInfoDataType
  ) => {
    const value = e.target.value;
    setHostInfoValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

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
              value={hostInfoValue.nickName}
              onChange={(e) => handleInputChange(e, 'nickName')}
              inputLabel="닉네임"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="닉네임을 입력해주세요"
              isCountValue={true}
              isValid
            />

            <Input
              value={hostInfoValue.keyword}
              onChange={(e) => handleInputChange(e, 'keyword')}
              inputLabel="키워드"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="키워드를 입력해주세요"
              isCountValue={true}
              isValid
            />

            <div css={hostTextAreaWrapper}>
              <span css={hostTextAreaLabelStyle}>소개글</span>
              <TextArea
                value={hostInfoValue.description}
                onChange={(e) => handleInputChange(e, 'description')}
                errorMessage="* 필수 입력 항목이에요."
                maxLength={70}
                placeholder="소개글을 입력해주세요"
                isValid
              />
            </div>

            <Input
              value={hostInfoValue.socialLink}
              onChange={(e) => handleInputChange(e, 'socialLink')}
              inputLabel="소셜 링크"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="닉네임을 입력해주세요"
              isCountValue={true}
              isValid
            />
          </div>

          <Button variant="medium">저장하기</Button>
        </section>
      </div>
    </div>
  );
};

export default HostInfoEditPage;
