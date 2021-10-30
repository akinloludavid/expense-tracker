import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
import logout from '../assets/logout.png'
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
      <h2>SpendWizely</h2>
      <div onClick={logOut} className="logout w-100 d-flex justify-content-flex-end" data-toggle="tooltip" data-placement="bottom" title="Logout">
        <img onClick={logOut} className="ml-auto img-fluid" src={logout} alt="logout"/>
      </div>
    </div>
  );
}

export default Header;