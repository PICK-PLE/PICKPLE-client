import { classInfoContainer } from './ClassInfo.style';

interface ClassInfoProps {
  content: string;
}

const ClassInfo = ({ content }: ClassInfoProps) => {
  return (
    <article css={classInfoContainer}>
      <p>{content}</p>
    </article>
  );
};

export default ClassInfo;
