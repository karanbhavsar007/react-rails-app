import React, { Component } from 'react';
import ReadArticles from './components/ReadArticles/ReadArticles';
import CreateArticle from './components/CreateArticle/CreateArticle';
import ReadOneArticle from './components/ReadOneArticle/ReadOneArticle';
import UpdateArticle from './components/UpdateArticle/UpdateArticle';
import DeleteArticle from './components/DeleteArticle/DeleteArticle';

class App extends Component {
  state = {
    currentMode: 'read',
    articleId: null
  }

  changeAppMode = (newMode, articleId) => {
    this.setState({currentMode: newMode});
            if(articleId !== undefined){
              this.setState({articleId: articleId});
            }
  }

  render() {
    let modeComponent = <ReadArticles changeAppMode={this.changeAppMode}/>
    
    switch(this.state.currentMode){
      case 'read':
          break;
      case 'readOne':
          modeComponent = <ReadOneArticle articleId={this.state.articleId} changeAppMode={this.changeAppMode}/>;
          break;
      case 'create':
          modeComponent = <CreateArticle changeAppMode={this.changeAppMode}/>;
          break;
      case 'update':
          modeComponent = <UpdateArticle articleId={this.state.articleId} changeAppMode={this.changeAppMode}/>;
          break;
      case 'delete':
          modeComponent = <DeleteArticle articleId={this.state.articleId} changeAppMode={this.changeAppMode}/>;
          break;
      default:
          break;
    }
    
    return modeComponent;
  }
}

export default App;
