import React from 'react';
import {
  imgSizeStyle,
  imgStyle,
  profileWrapperSizeStyle,
  profileWrapperStyle,
  usernameSizeStyle,
  usernameStyle,
} from './SimpleUserProfile.style';

export interface SimpleUserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'medium' | 'large';
  username: string;
  userImgUrl?: string;
}

const SimpleUserProfile = ({ size, userImgUrl, username }: SimpleUserProfileProps) => {
  const defaultImgUrl = 'svg/ic_default-userimg.svg';
  return (
    <div css={[profileWrapperStyle, profileWrapperSizeStyle[size]]}>
      <img
        src={userImgUrl || defaultImgUrl}
        alt={`${username}의 이미지`}
        css={[imgStyle, imgSizeStyle[size]]}
      />
      <span css={[usernameStyle, usernameSizeStyle[size]]}>{username}</span>
    </div>
  );
};

export default SimpleUserProfile;
