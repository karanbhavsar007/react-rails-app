import React, { Component } from 'react';
import axios from 'axios';
import ArticlesTable from './ArticlesTable/ArticlesTable';
import { Button } from 'reactstrap';

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
                <Button color="primary" onClick={() => this.props.changeAppMode('create')}>Create Artile</Button>
                <ArticlesTable articles={filteredArticles} changeAppMode={this.props.changeAppMode} />    
              </div>
          );
    }
}

export default ReadArticles;