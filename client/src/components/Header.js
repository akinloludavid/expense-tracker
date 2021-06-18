import React, {useContext} from 'react';
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
const Header = () => {
  const {dispatch} = useContext(GlobalContext)
  const history = useHistory()
  const logOut = (evt)=> {
    evt.preventDefault()
    
     dispatch({
       type: 'LOGOUT'
     })
    localStorage.removeItem('token')
    localStorage.removeItem('userdetails')
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