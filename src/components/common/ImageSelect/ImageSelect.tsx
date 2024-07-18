import { InputHTMLAttributes, useRef, useState, SetStateAction, Dispatch } from 'react';
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
  onFileSelect: Dispatch<SetStateAction<File[]>>;
  isMultiple?: boolean;
}

  const ImageSelect = ({ onFileSelect, isMultiple = false }: ImageSelectProps) => {
  const [previewURLs, setPreviewURLs] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

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
      const files: File[] = Array.from(event.target.files);

      // 선택된 파일이 3개를 초과하지 않도록 제한
      const allowedFiles = files.slice(0, 3 - previewURLs.length);

      // 파일을 읽고 프리뷰 URL을 생성하는 Promise 배열
      const previewURLPromises = allowedFiles.map(async (file) => {
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

      setPreviewURLs((prev) => [...prev, ...newPreviewURLs]);
      onFileSelect((prev: File[]) => {
        return [...prev, ...allowedFiles];
      });
    }
  };

  const handleDeleteImage = (index:  number) => {
    setPreviewURLs(previewURLs.filter((_, i) => i !== index));
    onFileSelect((prev: File[]) => {
      const newFile = [...prev];
      newFile.splice(index, 1);
      return newFile;
    });
    if (inputRef.current) {
      inputRef.current.value = '';
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
        ref={inputRef}
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
            <span css={deleteImageIconStyle} onClick={() => handleDeleteImage(index)}>
              <IcDeletePhoto />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSelect;
