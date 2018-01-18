import React, { Component } from 'react'
import PictureItem from '../PictureItem'
import { Grid } from 'semantic-ui-react'

class Pictures extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <Grid>
        <Grid.Row columns={5}>
        {this.props.pictures.map(p => {
          return(
            <Grid.Column>
              <PictureItem
                key={p.id}
                name={p.name}
                img={p.picture}
              />
            </Grid.Column>
          )
        })}
        </Grid.Row>
      </Grid>
    )
  }
}

export default Pictures
