import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Navigation from '../Menu'

class App extends Component {
  render() {
    return (
      <Container >
        <Navigation/>
        <div className="App">
          <header>
            <h1>Welcome to React</h1>
          </header>
        </div>
      </Container>
    );
  }
}

export default App;
