import * as React from 'react'
import {
  Grid,
  Header,
  Image
} from 'semantic-ui-react'

const Home = (props: any) => {
  return (
    <Grid padded centered>
      <Grid.Row>
        <Grid.Column width={12} verticalAlign="middle">
            <Header as="h1">Dandy and Duchess</Header>
            <Image centered alt="Home picture" src={props.image} />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12}>
          <div style={{ textAlign: "justify" }}>
            <p>Dancy and Duchess provides space for you to explore 
              and advance your interest and knowledge in how to style 
              style your life in a contemporary fashion.
            </p>
            <p>To get started, log in to explore the Ideas section, 
              where you can find articles about various aspects of 
              style and living. In the My Zone section, you can 
              start to build up your own collection of ideas.</p>
            <p>Enjoy!</p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Home