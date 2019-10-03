import React, { Component } from 'react';

const style={
    color: 'blue',
    fontSize : '14px',
    padding: '15px'
}

class Link extends Component {
    render() {
        return (
            <a {...this.props} style={style}/>
        );
    }
}

export default Link;