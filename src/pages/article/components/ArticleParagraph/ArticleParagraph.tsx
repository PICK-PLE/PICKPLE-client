import { articleContainer, articleCotent, articleTitle } from './ArticleParagraph.style';

interface ArticleParagraphProps {
  title: string;
  title2?: string;
  content: string;
}

const ArticleParagraph = ({ title, title2, content }: ArticleParagraphProps) => {
  return (
    <article css={articleContainer}>
      <h3 css={articleTitle}>
        {title} <br /> {title2}
      </h3>
      <p css={articleCotent}>{content}</p>
    </article>
  );
};

export default ArticleParagraph;
