import React from 'react';
import { imgStyle, profileWrapperStyle, usernameStyle } from './SimpleUserProfile.style';

export interface SimpleUserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
  userImgUrl?: string;
}

const SimpleUserProfile = ({ userImgUrl, username }: SimpleUserProfileProps) => {
  const defaultImgUrl = '/public/svg/ic_default-userimg.svg';
  return (
    <div css={profileWrapperStyle}>
      <img src={userImgUrl || defaultImgUrl} alt={`${username}의 이미지`} css={imgStyle} />
      <span css={usernameStyle}>{username}</span>
    </div>
  );
};

export default SimpleUserProfile;
