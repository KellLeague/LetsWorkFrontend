import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios'
import firebase from '../firebase';



class SearchBar extends React.Component {
  state = {
      searchResults: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  fetchData = (query) => {
    Axios({
        method: 'get',
        url: '../',
        params: {
          username: 'snippet',
          avatar: 8,
          key: '',
          q: query,
        }
      })
      .then(res=>res.data)
      .then((data)=>{
          console.log('this the data', data)
        
      
      })

}

handleSubmit = (e) => {
  e.preventDefault();

  const { searchResults } = this.state;
  firebase.auth().signInWithEmailAndPassword(searchResults)
    .then((response) => {
      console.log('Returns: ', response);
    })
    .catch(err => {
      const { message } = err;
      this.setState({ error: message });
    })
}

  render(){
      return(
        <>
      <div  >
      <form className='form-inline my-2 my-lg-0'>
      <input className='form-control mr-sm-2' style={{'width': '500px'}} type='search' placeholder='Search' aria-label='Search' ></input>
      <button className='btn btn-outline-info' style={{'width': '420px'}} type='submit' >
      <Link to='/searchpage'>Lets Work</Link>
      </button>
      </form>
    </div>
    </>
      );
  }

}
export default SearchBar;


// const SearchBar = props => {
//     return(
//         <>
      // <div  >
      //   <form className='form-inline my-2 my-lg-0'>
      //   <input className='form-control mr-sm-2' style={{'width': '500px'}} type='search' placeholder='Search' aria-label='Search' ></input>
      //   <button className='btn btn-outline-info' style={{'width': '420px'}} type='submit' >
      //   <Link to='/searchpage'>Lets Work</Link>
      //   </button>
      //   </form>
      // </div>
//         </>
//     )
// }
// export default SearchBar;