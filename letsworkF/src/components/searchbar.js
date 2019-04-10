import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios'


class SearchBar extends React.Component {
  state = {
      searchResults: {}
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