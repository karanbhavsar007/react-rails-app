import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table, Input } from 'reactstrap';

class UpdateArticle extends Component {
    state = {
        title: this.props.articleId.title,
        description: this.props.articleId.description,
        author: this.props.articleId.author,
        tags: this.props.articleId.tags,
    }   
    
    postArticleHandler = () => {
        const article = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            tags: this.state.tags,
        }
        axios.put('http://localhost:3000/api/v1/articles/' + this.props.articleId.id, article);
    }
    
    render() {
    
        //console.log(this.state.article);
        return (
            <div>
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

                <Button color="info" onClick = {this.postArticleHandler}>Update Artile</Button>
            </div>
        );
    }
}
export default UpdateArticle;
            
                