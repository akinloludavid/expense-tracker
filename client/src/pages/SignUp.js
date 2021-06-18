import React, {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {Button, Form, Alert} from 'react-bootstrap'
import { ValidateFname, ValidateLname, ValidateEmail, ValidatePassword } from '../utils/Validation';
import {useAuth} from '../context/AuthContext'
import swal from 'sweetalert'
const SignUp = () => {
  const {signUp} = useAuth()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  //const [active, setActive] = useState(true)
  const history = useHistory()
  //setActive(false)
  const onSubmit = async (evt) =>{
    evt.preventDefault()
    
    if(!ValidateFname(firstNameRef.current.value)){
      return setError('First name is required')
    }
    if (!ValidateLname(lastNameRef.current.value)){
      return setError('Last name is required')
    }
    if(!ValidateEmail(emailRef.current.value)){
      return setError('Email is not valid')
    }
    if(!ValidatePassword(passwordRef.current.value)){
      return setError('Password should have at least 8 characters')
    }
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }
    
    setError('')
    setLoading(true)
    try{
      const res = await  signUp(firstNameRef.current.value, lastNameRef.current.value, emailRef.current.value, passwordRef.current.value)
      if (res.data.message === "User successfully created"){
        swal("Welcome!", res.data.data.firstname, "success");
        setLoading(false)
        history.push('/signin')
      }
      else if (res.data.message === "User already registered"){
        setLoading(false)
        return setError("Email already exists")
      }

    }catch(err){
      const errorArray = err.message.split(' ')
      const len = errorArray.length
      if(errorArray[len-1]==="400"){
        setLoading(false)
        return setError("Email already exists.")
      }else if(errorArray[len-1]==="500"){
        setLoading(false)
        return setError("Sorry can't create account at the moment.")
      }
      
      
    }
  }
  // const signUpWithGoogle = async (evt) =>{
  //   try{
  //     await googleSignUp()
  //     history.push('/home')
  //     console.log(currentUser)
  //   }catch(err){
  //     console.log(err.message)
  //   }
  // }
  // const googleSignIn =  () =>{
  //   auth
  //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then((res) => {
  //       console.log(res);
  //       if (res.user?.displayName) {
  //         swal("Welcome!", res.user?.displayName.split(' ')[0], "success");
  //       }
  //       history.push("/home");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  return ( 
    <div className = "signUpBg ">
      <h2>SpendWizely</h2>
      <div className = "col-md-12 p-3 bg-light">
      <Form onSubmit = {onSubmit} className = "">
      {error && <Alert variant ="danger">{error}</Alert>}
        <Form.Group className = "d-flex row" >
          <div className = "col-md-6">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" required id="formFirstName" ref = {firstNameRef} value = {fname} placeholder="e.g John" onChange = {(evt)=> setFname(evt.target.value)} />
          </div>

          <div className = "col-md-6">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text"  required id="formLastName" ref = {lastNameRef} value = {lname} placeholder="e.g Walker" onChange = {(evt)=> setLname(evt.target.value)} />
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  required value = {email} ref = {emailRef} placeholder="Enter email" onChange = {(evt)=> setEmail(evt.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  required value = {password} ref = {passwordRef} placeholder="Password"  onChange = {(evt)=>setPassword(evt.target.value)} />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password"  required ref = {passwordConfirmRef} placeholder="Password"/>
        </Form.Group>
        
        <Button variant = "primary"
        type = "submit" disabled = {loading}>
          Submit
        </Button>
        
        <Form.Text className="text-muted">
          Already have an account <Link to = "/signin">Sign in</Link>
        </Form.Text>
      </Form>
      {/* <Button onClick = {()=>signUpWithGoogle()}>Google Sign Up</Button> */}
      </div>
      
    </div>
  );
}
 
export default SignUp;