import React from 'react';
import { Container } from 'react-bootstrap'
import Navbar from './components/NavBar'
import TodoApp from './components/TodoApp';
import ButtonSuccess from './components/TodoApp/ButtonSuccess';

function App() {
  return (
    <div>
      <Navbar/>
      <Container> 
      <div>Saya mau belajar reactjs</div>
      <TodoApp/>
      <ButtonSuccess name="tombolSetuju">Yes, i want to learn reactjs</ButtonSuccess>
      </Container>
    </div>
    
    
  );
}

export default App;
