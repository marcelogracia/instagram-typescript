import * as React from 'react';
import { Component } from 'react';

const style = (block:boolean) => ({
    backgroundColor : '#00D1B2',
    border : '0px',
    borderRadius : '4px',
    padding : '10px 15px',
    color: '#fff',
    width : block ? '100%' : undefined,
    marginBottom: '10px'
})

interface IButtonProps{
    block? : boolean
}
 
class Button extends React.Component <IButtonProps>{
    render() { 
        const {block = false} = this.props
        return (  
            <button {...this.props} style={style(block)}/>
        );
    }
}
 
export default Button;