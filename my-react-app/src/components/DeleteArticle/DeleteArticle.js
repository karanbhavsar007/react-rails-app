import React, { Component } from 'react';
import axios from 'axios'; 

class DeleteArticle extends Component {
    
    deletePostHandler = () => {
        axios.delete('http://localhost:3000/api/v1/articles/' + this.props.articleId);
    }

    render() {
        return (
            <div>
                <div>Are you sure?</div>
                <div>
                    <div>
                        <button onClick={this.deletePostHandler}>Yes</button>
                        <button onClick={() => this.props.changeAppMode('read')}>No</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteArticle;
