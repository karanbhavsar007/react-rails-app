import React, { Component } from 'react';

class ArticleRow extends Component {
  
  render() {
    return (
        <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.author}</td>
        <td>
        <a href='#' className='btn btn-info m-r-1em'
            onClick={() => this.props.changeAppMode('readOne', this.props.article)}
          > Read One
          </a>
          <a href='#' className='btn btn-primary m-r-1em'
            onClick={() => this.props.changeAppMode('update', this.props.article)}
            > Edit
          </a>
          <a href='#' className='btn btn-danger m-r-1em'
            onClick={() => this.props.changeAppMode('delete', this.props.article.id)}
            > Delete
          </a>
        </td>
    </tr>
    );
  }
}

export default ArticleRow