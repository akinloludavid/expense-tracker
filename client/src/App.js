import './App.css';

import GlobalContextProvider from './context/GlobalState';
import {Route, Switch} from 'react-router-dom'
import Home from './Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Landing from './pages/Landing'
import ProtectedRoute from './context/ProtectedRoute';
import {AuthProvider} from './context/AuthContext'

function App() {
  return (
    <GlobalContextProvider>
      
      <AuthProvider>
        <Switch>
        <ProtectedRoute exact path = "/home" component ={Home}/>
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/signup" component = {SignUp}/>
          <Route exact path = "/signin" component = {SignIn}/>
        </Switch>
      </AuthProvider>
      
    </GlobalContextProvider>
  );
}

export default App;
