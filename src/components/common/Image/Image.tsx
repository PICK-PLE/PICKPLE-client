import { HTMLAttributes, ReactNode } from 'react';
import { imageVariant, imageWrapper } from './Image.style';

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'square' | 'round';
  label?: ReactNode;
  width: string;
  height: string;
}

const Image = ({ label, width, height, variant = 'square' }: ImageProps) => {
  return (
    <div css={[imageWrapper(width, height), imageVariant[variant]]}>
      <span>{label}</span>
    </div>
  );
};

export default Image;
