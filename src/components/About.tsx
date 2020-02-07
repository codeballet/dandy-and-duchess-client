import * as React from 'react'
import {
  Grid,
  Header
} from 'semantic-ui-react'

const About = (props: any) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={10} verticalAlign="middle">
          <Header as="h1">About us</Header>
          <div style={{ textAlign: "justify" }}>
            <p>Dandy and Duchess is created by Dr. Johan Stjernholm 
              and HRH Flora Zeta Cheong-Leen. We believe that as 
              human beings, we all can contribute as individuals 
              to enhance the way we live our lives in terms of beauty, 
              sustainability, and compassion.</p>
            <p>Here, we invite you to be inspired by  
              some of our <a href="ideas">Ideas</a> for how
              to improve our shared world, which also is your world. 
              Please feel free to read, enjoy, and advance your own 
              ideas in <a href="myzone">My Zone</a>.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About