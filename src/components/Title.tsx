import React, { Component } from 'react';

const style = {
    color: '#555',
    
}
class Title extends Component {
    render() {
        return (
            <h2 {...this.props} style={style}></h2>
        );
    }
}

export default Title;