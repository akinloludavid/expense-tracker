import React, {useContext} from 'react';
import axios from 'axios'

const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
  const signUp = (fname, lname, email, password) => {
    const userDetails = {
      firstname: fname,
      lastname: lname,
      email: email,
      password
    }
    return axios.post('/api/signup', userDetails)
  }
  const signIn = (email, password) =>{
    const config = {
      'Content-Type': 'application/json'
    }
    const userDetails = {
      email, password 
    }
    return axios.post('/api/signin', userDetails, config)
  }
  const values = {
    signUp,
    signIn
  
  }
  return ( 
    <AuthContext.Provider value = {values}>
      {children}
    </AuthContext.Provider>
   );
}
 
