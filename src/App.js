import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import {Grid,Container,Header,Image,Form,Message,Button,Segment} from "semantic-ui-react"
class App extends Component {
  render() {
    return (
      <div>
      <br /> <br />   <br /> <br />
     <Container textAlign='center'>
       <Header as="h3" color='blue'>
         <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" height="50px" widht="50px" />
          Member login
       </Header>
     </Container>
        <br />
      <Grid container columns={3}>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>
        <Segment>
          <Form success>
             <Form.Input type='text' placeholder='Emailaddres' icon='user '  iconPosition='left' />
             <Form.Input  type='password' placeholder='password' icon='lock '  iconPosition='left'/>
             <Form.Checkbox  label='I agree to the Terms and Conditions' />
             <Button fluid primary>login</Button>

           </Form>
          </Segment>
          <Message>

           tidak punya akun.? silahkan<a href='https://niomic.com'> registrasi </a>
         </Message>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default App;
