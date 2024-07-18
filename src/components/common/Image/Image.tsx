import { HTMLAttributes, ReactNode } from 'react';
import { imageStyle, imageVariant, imageWrapper, labelStyle } from './Image.style';
import { SerializedStyles, Theme } from '@emotion/react';

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  variant?: 'square' | 'round';
  label?: ReactNode;
  width: string;
  height?: string;
  customStyle?: ((theme: Theme) => SerializedStyles) | SerializedStyles;
}

const Image = ({
  src,
  label,
  width,
  height = width,
  variant = 'square',
  customStyle,
}: ImageProps) => {
  /**@정안todo Label 컴포넌트 코리 후 겹쳐서 띄우기  */
  return (
    <div css={[imageWrapper(width, height)]}>
      <img css={[imageStyle, imageVariant[variant], customStyle]} src={src} alt={src} />
      <span css={labelStyle}>{label}</span>
    </div>
  );
};

export default Image;
