import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table, Input } from 'reactstrap';
import './CreateArticle.css';

class CreateArticle extends Component {
    state = {
        title: '',
        description: '',
        author: '',
        tags: '',
    }   
    
    postArticleHandler = () => {
        const article = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            tags: this.state.tags,
        }
        axios.post('http://localhost:3000/api/v1/articles', article);
    }
    
    render() {
        return (
            <div>
                <Button color="primary" onClick={() => this.props.changeAppMode('read')}>Home</Button>
                
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                            <Input placeholder="title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />   
                            </td>    
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <Input type="textarea" placeholder="description" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td>
                                <Input placeholder="author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Tags</td>
                            <td>
                                <Input placeholder="tags" value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})}/>
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
            
                