import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Button, Table, Input } from 'reactstrap';
import './CreateArticle.css';

class CreateArticle extends Component {
    state = {
        title: '',
        description: '',
        author: '',
        tags: '',
        successCreation: null,
    }   
    
    postArticleHandler = () => {    
        const article = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            tags: this.state.tags,
        }
        axios.post('http://localhost:3000/api/v1/articles', article)
            .then(response => {
                this.setState({successCreation: response.status});
            });
        
    }
    
    render() {
        return (
            <div>
                {this.state.successCreation === 200 ?
                <Alert color="success">Article saved successfully!</Alert>: null}
                                
                <Button color="primary" onClick={() => this.props.changeAppMode('read')}>Home</Button>
                
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                            <Input type="text" placeholder="title" required value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />   
                            </td>    
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <Input type="textarea" placeholder="description" required value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td>
                                <Input type="text" placeholder="author" required value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Tags</td>
                            <td>
                                <Input type="text" placeholder="tags" value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})}/>
                            </td>    
                        </tr>
                    </tbody>
                </Table>
                
                <Button color="info" onClick = {this.postArticleHandler}>Create Artile</Button>
            </div>
        );
    }
}
export default CreateArticle;
            
                