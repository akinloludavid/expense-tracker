import React from 'react';
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const Header = () => {
  const history = useHistory()
  const logOut = (evt)=> {
    evt.preventDefault()
    localStorage.removeItem('token')
    history.push('/')
  }
  return ( 
    <div className="d-flex">
      <h3>SpendWizely</h3>
      <Button variant= "danger"onClick={logOut}>Log out</Button>

    </div>
  );
}
 
export default Header;