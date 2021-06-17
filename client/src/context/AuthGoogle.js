import React, {useState, useContext, useEffect} from 'react'
import {auth} from '../config/firebase-config'
import firebase from 'firebase'

export function useAuth(){
  return useContext(AuthContext)
}
const AuthContext = React.createContext()
export function AuthProvider({children}) {
  const[currentUser, setCurrentUser] = useState()

  const googleSignUp = () =>{
    return auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
  }
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      setCurrentUser(user)
    })
    return unsubscribe
  },[])
  const value = {
    currentUser,
    googleSignUp
  }
  return (
    <AuthContext.Provider value = {value}>
      {children}
    </AuthContext.Provider>
  )
}
