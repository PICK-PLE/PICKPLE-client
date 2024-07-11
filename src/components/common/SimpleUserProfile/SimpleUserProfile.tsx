import React from 'react';
import {
  imgSizeStyle,
  imgStyle,
  profileWrapperSizeStyle,
  profileWrapperStyle,
  usernameSizeStyle,
  usernameStyle,
} from './SimpleUserProfile.style';
import { IcDefaultUserimg } from '@svg';

export interface SimpleUserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'medium' | 'large';
  username: string;
  userImgUrl?: string;
}

const SimpleUserProfile = ({ size, userImgUrl, username }: SimpleUserProfileProps) => {
  return (
    <div css={[profileWrapperStyle, profileWrapperSizeStyle[size]]}>
      {userImgUrl ? (
        <img src={userImgUrl} alt={`${username}의 이미지`} css={[imgStyle, imgSizeStyle[size]]} />
      ) : (
        <span css={[imgStyle, imgSizeStyle[size]]}>
          <IcDefaultUserimg />
        </span>
      )}

      <span css={[usernameStyle, usernameSizeStyle[size]]}>{username}</span>
    </div>
  );
};

export default SimpleUserProfile;
