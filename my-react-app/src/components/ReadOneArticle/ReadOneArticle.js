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
                <Button color="primary" onClick={() => this.props.changeAppMode('read')}>Read Article</Button>
            
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
                                <Input value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
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
            </div>
        );
    }
}
export default ReadOneArticle;
            
                