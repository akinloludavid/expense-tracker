import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const SignIn = () => {
  return ( 
    <div className = "signInBg bg-light p-3">
      <h3 className= "m-3">Sign In</h3>
      <Form className = "bg-light col-md-12 p-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Form.Text className="text-muted">
          Dont have an account, <Link to = "/signup">Create Account</Link>
        </Form.Text>
      </Form>

    </div>
   );
}
 
export default SignIn;