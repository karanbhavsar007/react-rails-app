import React, { Component } from 'react';

class ArticleRow extends Component {
  
  render() {
    return (
        <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.author}</td>
        <td>
        <a href='#'
            onClick={() => this.props.changeAppMode('readOne', this.props.article)}
          > Read One
          </a>
          <a href='#'
            onClick={() => this.props.changeAppMode('update', this.props.article)}
            > Edit
          </a>
          <a href='#'
            onClick={() => this.props.changeAppMode('delete', this.props.article.id)}
            > Delete
          </a>
        </td>
    </tr>
    );
  }
}

export default ArticleRow