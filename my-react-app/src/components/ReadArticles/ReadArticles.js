import React, { Component } from 'react';
import axios from 'axios';
import ArticlesTable from '../ArticlesTable/ArticlesTable';

class ReadArticles extends Component {
    state = {
        articles: []
    }

    componentDidMount () {
        axios.get('http://localhost:3000/api/v1/articles')
            .then(response => {
                this.setState({articles: response.data});
            });
    } 
    render() {
        const filteredArticles = this.state.articles;

        return (
              <div>
                  <ArticlesTable
                    articles={filteredArticles} />
              </div>
          );
    }
}

export default ReadArticles;