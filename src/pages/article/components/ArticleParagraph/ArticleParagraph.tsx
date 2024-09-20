import { articleContainer, articleCotent, articleTitle } from './ArticleParagraph.style';

interface ArticleParagraphProps {
  title: string;
  content: string;
}

const ArticleParagraph = ({ title, content }: ArticleParagraphProps) => {
  return (
    <article css={articleContainer}>
      <h3 css={articleTitle}>{title}</h3>
      <p css={articleCotent}>{content}</p>
    </article>
  );
};

export default ArticleParagraph;
