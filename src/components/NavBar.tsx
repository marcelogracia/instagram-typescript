import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faNewspaper } from '@fortawesome/free-solid-svg-icons'

const style = {
    navbar: {
        borderBottom: 'solid 1px #aaa',
        padding: '10px 15px',
    }, 
    link :{
        color:'#555', 
        textDecoration:'none',
    }
}

class NavBar extends Component {
    render() {
        return (
            <div style={style.navbar}>
                <Link to='/app/newsfeed' >
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>Instacool</Link>
                <div style={{float:'right'}}>
                    <Link style={style.link} to='/app/profile' ><FontAwesomeIcon icon={faUser} />Perfil</Link>
                </div>
            </div>
        );
    }
}

export default NavBar;