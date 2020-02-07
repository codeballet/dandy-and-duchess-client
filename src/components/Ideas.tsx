import * as React from 'react'
import {
  Grid,
  Header
} from 'semantic-ui-react'

const Ideas = (props: any) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={12} verticalAlign="middle">
          <Header as="h1">Ideas for inspiration</Header>
          <p>
            Create a blog filled with ideas!
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Ideas