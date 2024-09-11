import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchHostInfo } from '@apis/domains/host/useFetchHostInfo';
import { usePatchHostInfo } from '@apis/domains/host/usePatchHostInfo';
import { usePutS3Upload } from '@apis/domains/presignedUrl';

import { Button, Header, Image, Input, TextArea } from '@components';
import { images } from '@constants';
import {
  hostBackgroundImage,
  hostImageWrapper,
  hostInfoContainer,
  hostInfoEditIcon,
  hostInfoEditInput,
  hostInfoLayout,
  hostInputContainer,
  hostInputWrapper,
  hostProfileImage,
  hostTextAreaLabelStyle,
  hostTextAreaWrapper,
} from '@pages/host/page/HostInfoEditPage/HostInfoEditPage.style';
import { IcCamera } from '@svg';
import { handleUpload } from '@utils';

import { components } from '@schema';
type HostUpdateRequest = components['schemas']['HostUpdateRequest'];

const HostInfoEditPage = () => {
  const { hostId } = useParams();
  const { data: hostInfoData } = useFetchHostInfo(Number(hostId));
  const { mutate } = usePatchHostInfo(Number(hostId));
  const { mutateAsync: putS3UploadMutateAsync } = usePutS3Upload();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAllValid, setIsAllValid] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>();
  const [hostInfoValue, setHostInfoValue] = useState({
    profileUrl: images.HostProfileImage,
    nickname: '',
    keyword: '',
    description: '',
    socialLink: '',
  });

  useEffect(() => {
    if (hostInfoData) {
      const { profileUrl, nickName, keyword, description, socialLink } = hostInfoData;
      setHostInfoValue({
        profileUrl: profileUrl || images.HostProfileImage,
        nickname: `${nickName}`,
        keyword: `${keyword}`,
        description: `${description}`,
        socialLink: `${socialLink}`,
      });
    }
  }, [hostInfoData]);

  useEffect(() => {
    const allInputFilled = Object.values(hostInfoValue).every((value) => value?.trim() !== '');
    setIsAllValid(allInputFilled);
  }, [hostInfoValue]);

  const handleProfileImageIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // 파일 프리뷰 설정하기
    const reader = new FileReader();
    reader.onloadend = () => {
      setHostInfoValue((prevState) => ({
        ...prevState,
        profileUrl: reader.result as string,
      }));
    };

    reader.readAsDataURL(file);

    setSelectedFiles([file]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof HostUpdateRequest
  ) => {
    const value = e.target.value;
    setHostInfoValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const isValid = (value: string) => {
    return value.trim().length >= 1;
  };

  const handleButtonClick = async (): Promise<void> => {
    let imageUrl: string = '';

    // 파일이 선택된 경우 Presigned URL을 얻고 S3에 파일 업로드
    if (selectedFiles?.length === 1) {
      try {
        const imageUrlList = await handleUpload({
          selectedFiles,
          putS3Upload: putS3UploadMutateAsync,
          type: 'HOST_PROFILE_PREFIX',
        });
        imageUrl = imageUrlList[0];
      } catch (error) {
        console.error('S3 업로드 실패: ', error);
        alert('이미지 업로드에 실패했습니다.');
        return;
      }
    }

    // 업로드된 이미지 URL로 hostInfoValue 업데이트
    const updateHostInfoValue = { ...hostInfoValue, profileUrl: imageUrl };
    mutate({ hostId: Number(hostId), hostInfoValue: updateHostInfoValue });
  };

  return (
    <div>
      <Header title="프로필 관리" isLine={true} />
      <div css={hostInfoLayout}>
        <section css={hostInfoContainer}>
          <div css={hostImageWrapper}>
            <img src={images.HostBackGroundImage} css={hostBackgroundImage} />
            <div css={hostProfileImage}>
              <Image
                src={hostInfoValue.profileUrl ? hostInfoValue.profileUrl : images.HostProfileImage}
                variant="round"
                width="8.2rem"
              />
            </div>
            <div css={hostInfoEditIcon}>
              <IcCamera onClick={handleProfileImageIconClick} />
              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => handleProfileImageChange(e)}
                css={hostInfoEditInput}
              />
            </div>
          </div>
        </section>

        <section css={hostInputContainer}>
          <div css={hostInputWrapper}>
            <Input
              value={hostInfoValue.nickname}
              onChange={(e) => handleInputChange(e, 'nickname')}
              inputLabel="닉네임"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="닉네임을 입력해주세요"
              isCountValue={true}
              isValid={isValid(hostInfoValue.nickname)}
            />

            <Input
              value={hostInfoValue.keyword}
              onChange={(e) => handleInputChange(e, 'keyword')}
              inputLabel="키워드"
              errorMessage="* 필수 입력 항목이에요."
              maxLength={50}
              placeholder="키워드를 입력해주세요"
              isCountValue={true}
              isValid={isValid(hostInfoValue.keyword)}
            />

            <div css={hostTextAreaWrapper}>
              <span css={hostTextAreaLabelStyle}>소개글</span>
              <TextArea
                value={hostInfoValue.description}
                onChange={(e) => handleInputChange(e, 'description')}
                errorMessage="* 필수 입력 항목이에요."
                maxLength={70}
                placeholder="소개글을 입력해주세요"
                isValid={isValid(hostInfoValue.description)}
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
              isValid={isValid(hostInfoValue.socialLink)}
            />
          </div>

          <Button variant="medium" disabled={!isAllValid} onClick={handleButtonClick}>
            저장하기
          </Button>
        </section>
      </div>
    </div>
  );
};

export default HostInfoEditPage;
