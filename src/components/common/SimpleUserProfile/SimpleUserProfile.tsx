import React from 'react';

import {
  profileWrapperSizeStyle,
  profileWrapperStyle,
  usernameSizeStyle,
  usernameStyle,
} from './SimpleUserProfile.style';
import Image from '../Image/Image';

export interface SimpleUserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'medium' | 'large' | 'xlarge';
  username: string;
  userImgUrl?: string;
}

const SimpleUserProfile = ({ size, userImgUrl, username }: SimpleUserProfileProps) => {
  return (
    <div css={[profileWrapperStyle, profileWrapperSizeStyle[size]]}>
      <Image variant="round" src={userImgUrl ?? ''} width="6rem" />
      <span css={[usernameStyle, usernameSizeStyle[size]]}>{username}</span>
    </div>
  );
};

export default SimpleUserProfile;
