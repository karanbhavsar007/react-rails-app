import React, { Component } from 'react';

class ArticleRow extends Component {
  
  render() {
    return (
        <tr>
        <td>{this.props.article.title}</td>
        <td>{this.props.article.author}</td>
        <td>
            {/* <a href='#'
                onClick={() => this.props.changeAppMode('readOne', this.props.product.id)}
                className='btn btn-info m-r-1em'> Read One
            </a>
            <a href='#'
                onClick={() => this.props.changeAppMode('update', this.props.product.id)}
                className='btn btn-primary m-r-1em'> Edit
            </a>
            <a
                onClick={() => this.props.changeAppMode('delete', this.props.product.id)}
                className='btn btn-danger'> Delete
            </a> */}
        </td>
    </tr>
    );
  }
}

export default ArticleRow