import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Button, Table, Input } from 'reactstrap';

class UpdateArticle extends Component {
    state = {
        title: this.props.articleId.title,
        description: this.props.articleId.description,
        author: this.props.articleId.author,
        tags: this.props.articleId.tags,
        validation: true,
        successCreation: null,
    }   
    
    postArticleHandler = () => {
        const article = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            tags: this.state.tags,
        }

        if(article.title === '' || article.description === '' || article.author === '' || article.tags === '' )
            this.setState({validation:  false});
        else{
        axios.put('http://localhost:3000/api/v1/articles/' + this.props.articleId.id, article)
            .then(response => {
                this.setState({successUpdate: response.status});
            });
        }
    }
    
    render() {
        return (
            <div>
                {this.state.successUpdate === 200 ?
                <Alert color="success">Article updated successfully!</Alert>: null}

                 {this.state.validation === false ?
                <Alert color="danger">One of the fields is missing!</Alert>: null}  

                <Button color="primary" onClick={() => this.props.changeAppMode('read')}>Home</Button>
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                                <Input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <Input type="textarea" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td>
                                <Input value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Tags</td>
                            <td>
                                <Input value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})}/>
                            </td>    
                        </tr>
                    </tbody>
                </Table>

                <Button color="info" onClick = {this.postArticleHandler}>Update Changes</Button>
            </div>
        );
    }
}
export default UpdateArticle;
            
                