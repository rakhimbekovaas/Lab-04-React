import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onRemove }) => {
  if (articles.length === 0) {
    return <p>No articles yet. Add one!</p>;
  }

  return (
    <div>
      <h3>Articles ({articles.length})</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map(article => (
          <ArticleItem
            key={article.id}
            article={article}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
