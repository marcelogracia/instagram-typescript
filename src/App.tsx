import React from 'react';
import './App.css';

import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'

const App: React.FC = () => {
  return (
    <Container>
      <Card>  
        <Input />
      </Card>
    </Container>
    
  );
}

export default App;
