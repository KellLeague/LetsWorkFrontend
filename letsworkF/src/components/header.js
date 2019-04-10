import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { Component } from 'react'
import headercontainer from '../components/header.css'


// const Header = props => {
//     return(
//         <>
//         <div></div>
    // <div class="p-3 mb-2 bg-info text-white">LetsWork</div>
    // <div class="shadow-lg p-3 mb-5 bg-white rounded"></div>
    //   {/* <Link className='nav-link' to='/SignUp' >SignUp</Link> */}

//         </>

//     )
// }
// export default Header;

class Header extends Component {

    render() {
      return (
        <HashRouter>
          <>
          <div className='headercontainer'>
          <Link className='nav-link' to='/' >LetsWork</Link>
          <Link className='nav-link' to='/SignUp' >SignUp</Link>
          <Link className='nav-link' to='/login' >Login</Link>
          <Link className='nav-link' to='/logout' >LogOut</Link>
          <div class="shadow-lg p-3 mb-5 bg-white rounded"></div>
          </div>
          

        </>
        </HashRouter>
        
      );
    }
  }
  
  export default Header;