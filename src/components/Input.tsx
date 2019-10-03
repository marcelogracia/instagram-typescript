import React, { Component } from 'react'
const style = {
    backgroundColor : '#fff',
    padding: '10px 15px',
    border : '3px solid #ddd',
}
export default class Input extends Component {
    render() {
        return (
            <input {...this.props} style={style} />
        )
    }
}
