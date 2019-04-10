import React from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
// import UserProfile from '../components/userprofile';
import axios from 'axios'

export default class Login extends React.Component {

  state = {
    email: '',
    password: '',
    error: '',
    user: {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })

  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        // this.props.history.push('/')
      }
      else {
        // ..... The user is logged out
      }
    })
    // this.matchUserByEmail()
  }

  matchUserByEmail = () => {
    axios.get('/users/email')
      .then(res => {
        console.log('res',res)
        this.setState({
          user: {
            user_email: res.data.email,
            username: res.data.username

          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { email, password, error, user} = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>

    return (
      <>
        <h1>Welcome Back Lets Work</h1>
        {displayError}
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
          </div>
        </form>
        <form>
            <div class='container' >
            <button type="submit" class="btn btn-info btn-lg btn-block" onClick={this.handleSubmit}>
                <Link to='/userprofile:'>Lets Work</Link>
            </button>
            </div>
        </form>
      </>
    )
  }
}

