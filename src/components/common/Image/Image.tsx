import { HTMLAttributes, ReactNode } from 'react';
import { imageVariant, imageWrapper, labelStyle } from './Image.style';

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'square' | 'round';
  label?: ReactNode;
  width: string;
  height: string;
}

const Image = ({ label, width, height, variant = 'square' }: ImageProps) => {
  /**@정안todo Label 컴포넌트 코리 후 겹쳐서 띄우기  */
  return (
    <div css={[imageWrapper(width, height), imageVariant[variant]]}>
      <span css={labelStyle}>{label}</span>
    </div>
  );
};

export default Image;
