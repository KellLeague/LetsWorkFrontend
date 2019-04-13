import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './containers/home';
import Login from './containers/login';
import SignUp from './containers/signup';
import UserProfile from './components/userprofile';
import SearchPage from './components/searchpage';
import Logout from './containers/logout';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
      <Header/>
        <Route path='/signup' exact component={SignUp}/> 
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/containers/logout' exact component={Logout}/>
        <Route path='/userprofile' exact component={UserProfile}/>
        {/* <Route path='/searchpage' exact component={SearchPage}/> */}
      
      </>
      </HashRouter>
      
    );
  }
}

export default App;
