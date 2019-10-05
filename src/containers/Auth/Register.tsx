import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'

import Center from '../../components/Center'

class Login extends Component {
    render() {
        return (
            <Container center={true}>
                <Card>  
                    <Title>Registro</Title>
                    <Input label="Correo" placeholder="Correo"/>
                    <Input label="Password" placeholder="Password"/>
                    <Button block={true}>Enviar</Button>
                    <Center>
                        <Link to="/">Iniciar Sesión</Link>
                    </Center>
                </Card>
            </Container>
        );
    }
}

export default Login;