import React from 'react';
import './App.css';

import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import Title from './components/Title'
import Link from './components/Link'
import Center from './components/Center'

const App: React.FC = () => {
  return (
    <Container>
      <Card>  
        <Title>Iniciar Sesión</Title>
        <Input label="Correo" placeholder="Correo"/>
        <Input label="Password" placeholder="Password"/>
        <Button block={true}>Enviar</Button>
        <Center>
          <Link>Registrarse</Link>
        </Center>
      </Card>
    </Container>
    
  );
}

export default App;
