import React, { Component } from 'react';
import axios from 'axios'; 

class DeleteArticle extends Component {
    
    deletePostHandler = () => {
        axios.delete('http://localhost:3000/api/v1/articles/' + this.props.articleId);
    }

    render() {
        return (
            <div>
                <button onClick = {this.deletePostHandler}>Delete Artile</button>
            </div>
        );
    }
}

export default DeleteArticle;
