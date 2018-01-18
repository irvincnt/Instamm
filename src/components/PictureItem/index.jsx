import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class PictureItem extends Component {
  render(){
    return(
      <Card>
        <Image src={this.props.img} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>

    )
  }
}

export default PictureItem;
