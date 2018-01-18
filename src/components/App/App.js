import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Navigation from '../Menu'
import Pictures from '../Pictures'

const pictures = [
  {
    id: 1,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 2,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 3,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 4,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 5,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 6,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 7,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 8,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 9,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 10,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 11,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 12,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 13,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 14,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 15,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 16,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 17,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 18,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 19,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
  {
    id: 20,
    name: 'Irvin Giovanni',
    picture: 'https://pbs.twimg.com/profile_images/952013403035521024/8F9tL7Y7_400x400.jpg',
  },
]

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Container >
        <Navigation/>
        <Pictures pictures={pictures}/>
      </Container>
    );
  }
}

export default App;
