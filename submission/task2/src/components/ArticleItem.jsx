import { useState } from 'react';

const ArticleItem = ({ article, onRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li style={{
      marginBottom: '10px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, cursor: 'pointer' }} onClick={() => setIsExpanded(!isExpanded)}>
          {article.title} {isExpanded ? '▲' : '▼'}
        </h4>
        <button
          onClick={() => onRemove(article.id)}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          Remove
        </button>
      </div>
      
      {isExpanded && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '3px' }}>
          <p>{article.summary}</p>
        </div>
      )}
    </li>
  );
};

export default ArticleItem;
