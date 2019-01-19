import React, { Component } from 'react';
import ReadArticles from './components/ReadArticles/ReadArticles';
import CreateArticle from './components/CreateArticle/CreateArticle';

class App extends Component {
  
  render() {
    return (
      <div>
        <ReadArticles/>
        <CreateArticle/>
      </div>
    );
  }
}

export default App;
