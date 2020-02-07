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
            <p>To get started, 
              feel free to explore the <a href="ideas">Ideas</a> section, 
              where you can find articles about various aspects of 
              style and living. 
              Then, you may log on to <a href="myzone">My Zone</a>, 
              where you can start to build your own 
              collection of ideas to transform your life.</p>
            <p>Enjoy!</p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Home