import { useState } from 'react';
import { HTMLAttributes } from 'react';
import {
  imageSelectWrapper,
  inputStyle,
  previewImageStyle,
  thumbnailStyle,
  iconStyle,
  labelStyle,
  previewUrlsWrapper,
} from './ImageSelect.style';
import { IcCameraAdd } from '@svg';

interface ImageSelectProps extends HTMLAttributes<HTMLInputElement> {
  previewImage?: string | undefined;
}

const ImageSelect = ({ onChange }: ImageSelectProps) => {
  const [previewURLs, setPreviewURLs] = useState<string[]>([]);

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          resolve(e.target.result.toString());
        } else {
          reject(new Error('파일 읽기 실패!'));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newPreviewURLs: string[] = [];

      for (const file of files) {
        try {
          const result = await readFile(file);
          newPreviewURLs.push(result);
        } catch (error) {
          console.error('파일 읽기 실패!', error);
        }
      }
      setPreviewURLs(newPreviewURLs);
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <section css={imageSelectWrapper}>
      <label htmlFor="imgInput" css={labelStyle}>
        <div css={thumbnailStyle}>
          <span css={iconStyle}>
            <IcCameraAdd />
          </span>
        </div>
      </label>
      <input
        type="file"
        multiple
        accept="image/jpeg, image/png, image/gif, image/heic, image/webp"
        id="imgInput"
        css={inputStyle}
        onChange={handleImageChange}
      />
      <div css={previewUrlsWrapper}>
        {previewURLs.map((url, index) => (
          <div key={index} css={thumbnailStyle}>
            <img css={previewImageStyle} src={url} alt={`미리보기 이미지 ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSelect;
