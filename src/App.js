import React from 'react';
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import TodoApp from './components/TodoApp/ButtonSuccess';
import Home from './components/Home'
import DataWonderlink from './components/DataWonderlink'
function App() {
  return (
    
      <Router>
        <Navbar/>
        <Container>
          <Switch>
            <Route path="/todoapp">
              <TodoApp/>
            </Route>
            <Route path="/data_wonderlink">
              <DataWonderlink/>
            </Route>
            <Route path="/" exact>
              <Home/>
            </Route>
          </Switch>
        </Container>
      </Router>
  );
}

export default App;
