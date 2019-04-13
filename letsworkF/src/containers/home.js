import React from 'react';
import {HashRouter} from 'react-router-dom';
import firebase from '../firebase';
// import VideoHero from '../components/homevideo';
import axios from 'axios'


class Home extends React.Component {

  state = {
    userEmail: '',
    userId: '',
    token: ''
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        this.setState({ userEmail: user.email, userId: user.uid }, () => {
          this.getFirebaseIdToken()
        });
      }
      else {
        // ..... The user is logged out
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleUnprotectedAPI = (e) => {
    const { userEmail, userId } = this.state;

    axios.post('http://localhost:3001/unprotected', {
      id: userId,
      email: userEmail
    })
    .then(response => response.data )
    .then(data => {
      console.log(data);
    })
  }

  getFirebaseIdToken = () => {
    firebase.auth().currentUser.getIdToken(false).then((token) => {
      this.setState({ token })
    }).catch((error) => {
      // Handle error
    });
  }

  handleProtectedAPI = (e) => {
    axios.post('http://localhost:3001/protected', { token: this.state.token })
    .then(response => response.data )
    .then(data => {
      console.log(data);
    })
  }

  render() {
    const { userEmail, userId } = this.state;

    if (userEmail === '') {      
      return <h1>You're not logged in</h1>
    }
    else {
      return (
        <>
          <h2>Welcome back, {userEmail}</h2>   
          {/* <button onClick={this.handleUnprotectedAPI}>Unprotected API Invokation</button>
          <button onClick={this.handleProtectedAPI}>Protected API</button> */}
        </>
      )
    }
  }
}

export default Home;
