import React, { Component } from 'react';
import axios from 'axios'; 
import { Button } from 'reactstrap';

class DeleteArticle extends Component {
    state = {
        successDelete: null,
    }   
    deletePostHandler = () => {
        axios.delete('http://localhost:3000/api/v1/articles/' + this.props.articleId)
            .then(response => {
                this.setState({successDelete: response.status});
                if(this.state.successDelete === 204)
                    this.props.changeAppMode('read');;
            });
    };

    render() {
        return (
            <div className="row h-100 justify-content-center align-items-center">
                <div>Are you sure?</div>
                <div>
                    <div className='text-align-center'>
                        <Button color="danger" onClick={this.deletePostHandler}>Yes</Button>{'   '}
                        <Button color="secondary" onClick={() => this.props.changeAppMode('read')}>No</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteArticle;
