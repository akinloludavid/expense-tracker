import React, {useState, useRef}from 'react';
import {Form, Button, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import swal from 'sweetalert'
const SignIn =  () => {
    const {signIn} = useAuth()
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const history = useHistory()


    const login = async (evt) =>{
    
    
    evt.preventDefault()
    setLoading(true)
    try{
      const res = await signIn(emailRef.current.value, passwordRef.current.value)


      const token= res.data.token
      localStorage.setItem('token', token)
      setCurrentUser(res.data.user.firstname)
      setError('')
      setLoading(false)
      swal("Login Successful!", res.data.user.firstname, "success");
      return history.push('/home')
      
            
    }catch(err){
      const errorArray = err.message.split(' ')
      const len = errorArray.length
      if (errorArray[len - 1] === "400") {
        setLoading(false)
        return setError("Incorrect password or email.")
      } else if (errorArray[len - 1] === "500") {
        setLoading(false)
        return setError("Sorry can't login at the moment.")
      }
    }
  }
  return ( 
    <div className = "signInBg bg-light p-3">
      <h3 className= "m-3">Sign In</h3>
      <p className="text-warning">This is a test application so you sign in using email: howardjohn@mail.com and Password:Password27 for quick navigation.</p>

      {error && <Alert variant="danger">{error}</Alert>}
      <Form className = "bg-light col-md-12 p-3" onSubmit = {login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" ref = {emailRef}  />
          
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" ref = {passwordRef}/>
        </Form.Group>

        <Button variant="primary" disabled={loading} type="submit">
          Sign In
        </Button>

        <Form.Text className="text-muted">
          Dont have an account, <Link to = "/signup">Create Account</Link>
        </Form.Text>
      </Form>

    </div>
   );
}
 
export default SignIn;