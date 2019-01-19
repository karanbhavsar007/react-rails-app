import React, { Component } from 'react';
import axios from 'axios';

class ReadOneArticle extends Component {
    state = {
        title: this.props.article.title,
        description: this.props.article.description,
        author: this.props.article.author,
        tags: this.props.article.tags,
    }   
    
    render() {
        return (
            <div>
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
                <button onClick = {this.postArticleHandler}>Create Artile</button>
            </div>
        );
    }
}
export default ReadOneArticle;
            
                