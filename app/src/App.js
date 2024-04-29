import './App.css';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const initialValue = (
    '## 2nd value',
    '# Markdown Preview'
  )
  const [ markdown, setMarkdown ] = useState(initialValue);
  return (
    <main>
      <section className="markdown">
        <textarea
          id='editor'
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article id="preview" className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
