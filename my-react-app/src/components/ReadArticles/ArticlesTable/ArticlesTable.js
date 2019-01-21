import React, { Component } from 'react';
import ArticleRow from './ArticleRow/ArticleRow';
import { Table } from 'reactstrap';

class ArticlesTable extends Component {
    render() {
        const rows = this.props.articles.map(article => {
            return <ArticleRow key={article.id} article={article} changeAppMode={this.props.changeAppMode} />;
        });

        return (
            !rows.length
            ? <div className='alert alert-danger'>No products found.</div>
            :
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
          );
    }
}

export default ArticlesTable;