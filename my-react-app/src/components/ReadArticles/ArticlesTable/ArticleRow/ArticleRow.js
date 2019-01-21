import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ArticleRow extends Component {
  
  render() {
    return (
        <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.author}</td>
        <td>
          <Button color="info" onClick={() => this.props.changeAppMode('readOne', this.props.article)}>Read</Button>
          {' '}
          <Button color="primary" onClick={() => this.props.changeAppMode('update', this.props.article)}>Edit</Button>
          {' '}
          <Button color="danger" onClick={() => this.props.changeAppMode('delete', this.props.article.id)}>Delete</Button>
          {' '}
        </td>
    </tr>
    );
  }
}

export default ArticleRow