import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {ValidateFname, ValidateLname, ValidateEmail, ValidatePassword} from '../utils/Validation'
import {Button, Form} from 'react-bootstrap'
const SignUp = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [active, setActive] = useState(true)
  const history = useHistory()
  //setActive(false)
  const onSubmit =(evt) =>{
    evt.preventDefault()
    
    console.log(fname, lname, email, password)
    history.push('/home')
  }
  return ( 
    <div className = "signUpBg">
      <h2>SpendWizely</h2>
      <Form onSubmit = {onSubmit} className = "bg-light col-md-12 p-3">
        <Form.Group className = "d-flex row" controlId="formUserNames">
          <div className = "col-md-6">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" required  value = {fname} placeholder="e.g John" onChange = {(evt)=> setFname(evt.target.value)} />
          </div>

          <div className = "col-md-6">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text"  required value = {lname} placeholder="e.g Walker" onChange = {(evt)=> setLname(evt.target.value)} />
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  required value = {email} placeholder="Enter email" onChange = {(evt)=> setEmail(evt.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  required value = {password} placeholder="Password"  onChange = {(evt)=>setPassword(evt.target.value)} />
        </Form.Group>
        <Button variant = "primary"
        type = "submit" >
          Submit
        </Button>

        <Form.Text className="text-muted">
          Already have an account <Link to = "/signin">Sign in</Link>
        </Form.Text>
      </Form>
    </div>
  );
}
 
export default SignUp;