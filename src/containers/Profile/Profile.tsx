import React, { Component } from 'react'
import ProfileImg from '../../components/ProfileImg'
import Card from '../../components/Card'
import Button from '../../components/Button'

const style = {
    container : {
        padding : '15px',
    },
    row : {
        marginBottom: '10px',
        display: 'flex',
        justifyContent : 'space-between'
    }
}
export default class Profile extends Component {
    render() {
        return (
            <div style={style.container}>
                <div style={style.row}>
                    <ProfileImg />
                    <Button>Agregar</Button>
                </div>
                <div style={style.row}>
                    <Card> <img src="https://placekitten.com/140/140" /> </Card>
                    <Card> <img src="https://placekitten.com/140/140" /> </Card>
                    <Card> <img src="https://placekitten.com/140/140" /> </Card>
                </div>

            </div>
        )
    }
}
