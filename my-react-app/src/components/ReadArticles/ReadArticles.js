import React, { Component } from 'react';
import axios from 'axios';

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
        return (
              <h1>Hi! I am react App!</h1>
          );
    }
}

export default ReadArticles;