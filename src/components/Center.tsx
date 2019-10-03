import React, { Component } from 'react';

const style = {
    width : '100%',
    textAlign : 'center'

} as React.CSSProperties
class Center extends Component {
    render() {
        return (
            <div {...this.props} style={style}/>
        );
    }
}

export default Center;