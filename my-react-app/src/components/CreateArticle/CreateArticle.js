import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

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
                <a href='#'
            onClick={() => this.props.changeAppMode('read')}
            > Read Products
        </a>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type='text' value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <input type='text' value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td>
                                <input type='text' value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                            </td>    
                        </tr>
                        <tr>
                            <td>Tags</td>
                            <td>
                                <input type='text' value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})}/>
                            </td>    
                        </tr>
                    </tbody>
                </table>
                
                <Button color="primary" onClick = {this.postArticleHandler}>Create Artile</Button>
            </div>
        );
    }
}
export default CreateArticle;
            
                