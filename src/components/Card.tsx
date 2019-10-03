import React, { Component } from 'react'

const style = {
    backgroundColor : '#fff',
    padding: '10px 15px',
    border : '3px solid #ddd',
}
export default class Card extends Component {   
    render() {
        const {children} = this.props
        return (
            <div style= {style}>
                {children}
            </div>
        )
    }
}
