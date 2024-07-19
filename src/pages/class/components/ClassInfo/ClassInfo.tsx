import { classInfoContainer, contentStyle } from './ClassInfo.style';

interface ClassInfoProps {
  content: string;
}

const ClassInfo = ({ content }: ClassInfoProps) => {
  return (
    <article css={classInfoContainer}>
      <p css={contentStyle}>{content}</p>
    </article>
  );
};

export default ClassInfo;
