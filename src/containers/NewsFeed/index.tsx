import React, { Component } from 'react';

import Post from '../../components/Post'
import Container from '../../components/Container';


class NewsFeed extends Component {
    render() {
        
        return (
            <Container>
                <div style={{margin: '0 auto'}} >
                    <Post image={'https://placekitten.com/300/200'} />
                    <Post image={'https://placekitten.com/300/200'} />
                    
                </div>
            </Container>
        );
    }
}

export default NewsFeed;