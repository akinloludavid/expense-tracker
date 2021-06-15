import './App.css';

import GlobalContextProvider from './context/GlobalState';
import {Route, Switch} from 'react-router-dom'
import Home from './Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Landing from './pages/Landing'
function App() {
  return (
    <GlobalContextProvider>
      
      
        <Switch>
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/signup" component = {SignUp}/>
          <Route exact path = "/signin" component = {SignIn}/>
          <Route exact path = "/home">
            <Home/>
          </Route>
          
        </Switch>
    </GlobalContextProvider>
  );
}

export default App;
