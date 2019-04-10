import React from 'react';
import firebase from '../firebase';
import { Link, HashRouter } from 'react-router-dom';


class SignUp extends React.Component {

  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // do logic
        // this.props.history.push('/')
      }
      else {
        // users logged out
      }
    })
  }

componentWillMount() {}



  render() {
    const { email, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>

    return (
      <HashRouter>
        <>
        <h1>Join The Network Lets Work</h1>
        {displayError}
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
          </div>
          {/* <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button> */}
        </form>
        <form>
            <div class='container' >
            <button type="submit" class="btn btn-info btn-lg btn-block" onClick={this.handleSubmit}>
                <Link to='/userprofile'>SignUp</Link>
            </button>
            </div>
        </form>
        
      </>
      </HashRouter>
      
      
    )
  }
}


// const SignUp = props => {
     
//     return(
//         <>

//              <form className='needs validation' noValidate>
//              <div className='form-row'>
//              <div className='col-md-4 md-3'>
//                 <label for="validationCustom01">First name</label>
//                 <input type='text' className='form-control' id='validationCustom01' placeholder='First Name'  required></input>
//               <div className='valid-feedback'></div>              
//               </div>
//              <div className='col-md-4 mb-3'>
//              <label for='validationCustom02'>Last Name</label>
//              <input type='text' className='form-control' id='validationCustom02' placeholder='Last Name' ></input>
//               <div className='valid-feedback'/>
//               <div className='col-md-3 md-1'>
//               <label for='validationCustomUsername'>Username</label>
//               <div className='input-group'></div>
//               <div className='input-group-prepend'></div>
//               <span className='input-group-text' id='inputGroupPrepend' >@</span>
//               </div>
//               <input type='text' className='form-control' id='validationCustomUsername' placeholder='Username' aria-describedby='inputGroupPrepend'required/>
//               <div className='invalid-feedback' >Please Choose a Username</div>
//               </div>
//               <div className='form-row'>
//               <div className='col-md-6 mb-3'>
//               <label for='validationCustom03' >City</label>
//               <input type='text' className='form-control' id='validationCustom03' placeholder='City' required ></input>
//               <div className='invalid-feedback'> Please provide a valid city</div>
//               </div>
//               <div className='col-md-3 mb-3'>
//               <label for='validationCustom04' >State</label>
//               <input type='text' className='form-control' id='validationCustom04' placeholder='State' required ></input>
//               </div>
//               <div className='invalid-feedback' > Provide a valid state</div>
//               </div>
//               <div className='col-md-3- mb-3'>
//               <label for='validationCustom05'>Zip Code</label>
//               <input type='text' className='form-control' id='validationCustom05' placeholder='Zip Code' ></input>
//               <div className='invalid-feedback' >Provide Valid Zip Code</div>
//               </div>
//               <div className='form-group'>
//               <div className='form-check'>
//               <input className='form-check-input' type='checkbox' value='' id='invalidCheck'></input>
//               <label className='form-check-label' for='invalidCheck' >Agree to Terms and Conditions</label>
//               <div className='invalid-feedback'>You must agree before submitting</div>
//               </div>
//               <button className='btn btn-info' type='submit' > Ready to Work</button>
//               </div>
//              </div>
//              </form>
              

//         </>
//     )
// }
export default SignUp;