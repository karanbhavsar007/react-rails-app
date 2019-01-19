import React, { Component } from 'react';
import ArticleRow from '../ArticleRow/ArticleRow';

class ArticlesTable extends Component {
    render() {
        const rows = this.props.articles.map(article => {
            return <ArticleRow key={article.id} article={article} />;
        });

        return (
            !rows.length
            ? <div className='alert alert-danger'>No products found.</div>
            :
            <table className='table table-bordered table-hover'>
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
            </table>
          );
    }
}


export default ArticlesTable;