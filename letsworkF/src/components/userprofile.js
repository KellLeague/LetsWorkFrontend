import React from 'react';
import SearchBar from './searchbar';

const UserProfile = ({user}) => {
    console.log('props', user)
    return (
        <div className='container' >
             <>
        <SearchBar/>
     <div className="container">
        <div className="card mb-3" style={{"max-width": "800px"}}>
            <div className="row no-gutters">
                <div classNameName='profpic' className="col-md-3">
                <img src= {require('../assets/djw.jpg')} width='200' />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <ul className="nav justify-content-end">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Followers
                                <span className="badge badge-primary badge-pill">4M</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Following
                                <span className="badge badge-primary badge-pill">4</span>
                            </li>
                            <div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                    <label className="custom-control-label" for="customSwitch1"></label>
                                </div>

                                <a href="#" className="btn btn-primary">Follow</a>
                            </div>


                        </ul>


                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-9">
            <img src= {require('../assets/djw.jpg')} width='200' />
            <img src= {require('../assets/djw.jpg')} width='200' />
            <img src= {require('../assets/djw.jpg')} width='200' />
            <img src= {require('../assets/djw.jpg')} width='200' />
            
               
            </div>

        </div>






    </div>
    
    </>
        </div>
       
    )
}

export default UserProfile;