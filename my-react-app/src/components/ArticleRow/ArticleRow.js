import React, { Component } from 'react';
import DeleteArticle from '../DeleteArticle/DeleteArticle';
import ReadOneArticle from '../ReadOneArticle/ReadOneArticle';
import UpdateArticle from '../UpdateArticle/UpdateArticle';

class ArticleRow extends Component {
  
  render() {
    return (
        <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.author}</td>
        <td>
            <ReadOneArticle article={this.props.article}/>
            <UpdateArticle article={this.props.article}/>
            <DeleteArticle articleId={this.props.article.id}/>
        </td>
    </tr>
    );
  }
}

export default ArticleRow