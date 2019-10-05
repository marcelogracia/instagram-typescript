import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faThumbsUp  } from '@fortawesome/free-solid-svg-icons'


const style = {
    footer : {
        display:'flex', 
        backgroundColor: '#eee', 
        marginLeft:'-15px', 
        marginBottom: '-10px',
        width:'calc(100% + 30px'        
    } as React.CSSProperties,
    button: {
        flex:1, 
        textAlign:'center' , 
        cursor:'pointer', 
        padding: '10px 15px'
    } as React.CSSProperties
} 
        

class Footer extends Component {
    render() {
        return (
            <div>
            <div style={style.footer}> 
                    <div style={style.button}><FontAwesomeIcon icon={faThumbsUp}/> Like </div>
                    <div style={style.button}><FontAwesomeIcon icon={faRetweet}/> Retweet</div>
                </div>    
            </div>
        );
    }
}

export default Footer;