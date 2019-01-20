import React, { Component } from 'react';

class TopAction extends Component {
    render() {
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('create')}
                    > Create Article
                </a>
            </div>
        );
    }
}

export default TopAction;