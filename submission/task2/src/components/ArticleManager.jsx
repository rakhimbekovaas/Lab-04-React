import { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const ArticleManager = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleAddArticle = () => {
    if (!title || !summary) return;
    
    const newArticle = {
      id: Date.now(),
      title,
      summary,
    };
    
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };

  const handleRemoveArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Article Manager</h2>
      <AddArticle
        title={title}
        summary={summary}
        onTitleChange={(e) => setTitle(e.target.value)}
        onSummaryChange={(e) => setSummary(e.target.value)}
        onAdd={handleAddArticle}
      />
      
      <ArticleList
        articles={articles}
        onRemove={handleRemoveArticle}
      />
    </div>
  );
};

export default ArticleManager;
