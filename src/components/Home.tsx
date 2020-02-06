import * as React from 'react'
import {
  Grid,
  Header,
  Image
} from 'semantic-ui-react'

const Home = (props: any) => {
  return (
    <Grid padded centered>
      <Grid.Column verticalAlign="middle">
          <Header as="h1">Dandy and Duchess</Header>
          <Image centered alt="Home picture" src={props.image} size="large" />
      </Grid.Column>
    </Grid>
  )
}

export default Home