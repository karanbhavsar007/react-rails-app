import React, { Component } from 'react';

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
                <a href='#'
                onClick={() => this.props.changeAppMode('read')}
                >
                Read Products
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
            </div>
        );
    }
}
export default ReadOneArticle;
            
                