import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Login from './containers/login';
import SignUp from './containers/signup';
import UserProfile from './components/userprofile';
// import SearchPage from './components/searchpage';
import Logout from './containers/logout';

// import Userprofile from './components/userprofile'
// import userprofile from './components/userprofile';
// import HomeSignup from './components/homesignup';
// import HomeLogin from './components/homelogin';

// import EmailInput from './components/email';
// import SignUp from './components/SignUp';
// import SearchBar from './components/search';

// const Home = (props) => {
//   return(
//     <>
//     <h1>HOMEPAGE</h1>
//     <Link to='/Homepage'>HOMEPAGE</Link>
    
//     </>
//   )
// }

// const LoginLink = (props) => {
//   return(
//     <>
//     <h1>Login</h1>
//     <Link to='/Login'>LOGIN</Link>
//     <button type="button" class="btn btn-info btn-lg btn-block">LOGIN</button>
//     </>
//   )
// }

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
