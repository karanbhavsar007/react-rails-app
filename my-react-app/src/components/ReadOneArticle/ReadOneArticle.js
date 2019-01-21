import React, { Component } from 'react';
import { Button, Table, Input } from 'reactstrap';

class ReadOneArticle extends Component {
    state = {
        title: this.props.articleId.title,
        description: this.props.articleId.description,
        author: this.props.articleId.author,
        tags: this.props.articleId.tags,
    }   
    
    render() {
        return (
            <div>
                <Button color="primary" onClick={() => this.props.changeAppMode('read')}>Home</Button>
            
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{this.state.title}</td>    
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{this.state.description}</td>        
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td>{this.state.author}</td>    
                        </tr>
                        <tr>
                            <td>Tags</td>
                            <td>{this.state.tags}</td>   
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default ReadOneArticle;
            
                