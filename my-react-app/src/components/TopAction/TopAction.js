import React, { Component } from 'react';

class TopAction extends Component {
    render() {
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> Create Article
                </a>
            </div>
        );
    }
}

export default TopAction;