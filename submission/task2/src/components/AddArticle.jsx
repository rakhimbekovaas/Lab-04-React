const AddArticle = ({ title, summary, onTitleChange, onSummaryChange, onAdd }) => {
  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>Add New Article</h3>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Article title"
          value={title}
          onChange={onTitleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          placeholder="Article summary"
          value={summary}
          onChange={onSummaryChange}
          style={{ width: '100%', padding: '8px', minHeight: '80px' }}
        />
      </div>
      <button
        onClick={onAdd}
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Article
      </button>
    </div>
  );
};

export default AddArticle;
