import { InputHTMLAttributes, useState } from 'react';
import {
  imageSelectWrapper,
  inputStyle,
  previewImageStyle,
  thumbnailStyle,
  iconStyle,
  labelStyle,
  previewUrlsWrapper,
  deleteImageIconStyle,
} from './ImageSelect.style';
import { IcCameraAdd, IcDeletePhoto } from '@svg';

interface ImageSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  onFileSelect: (files: File[]) => void;
  previewImage?: string | undefined;
  isMultiple?: boolean;
}

const ImageSelect = ({ onFileSelect, isMultiple = false }: ImageSelectProps) => {
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

      // 파일을 읽고 프리뷰 URL을 생성하는 Promise 배열
      const previewURLPromises = files.map(async (file) => {
        try {
          const result = await readFile(file);
          return result;
        } catch (error) {
          console.error('파일 읽기 실패!', error);
          return null; // 실패할 경우 null을 반환
        }
      });

      // Promise 배열을 해결하여 결과를 받아온 후, null이 아닌 값만 필터링
      const newPreviewURLs = (await Promise.all(previewURLPromises)).filter(
        (url) => url !== null
      ) as string[];

      setPreviewURLs(newPreviewURLs);
      onFileSelect(files); // 선택된 파일 목록을 부모 컴포넌트에 전달
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
        multiple={isMultiple}
        accept="image/jpeg, image/png, image/jpg, image/webp"
        id="imgInput"
        css={inputStyle}
        onChange={handleImageChange}
      />
      <div css={previewUrlsWrapper}>
        {previewURLs.map((url, index) => (
          <div key={`${url} - ${index}`} css={thumbnailStyle}>
            <img css={previewImageStyle} src={url} alt={`미리보기 이미지 ${index + 1}`} />
            <span
              css={deleteImageIconStyle}
              onClick={() => setPreviewURLs(previewURLs.filter((_, i) => i !== index))}>
              <IcDeletePhoto />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSelect;
