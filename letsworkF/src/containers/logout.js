import React from 'react';
import firebase from '../firebase';

class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    return (
    <h1>User is now logged out...</h1>
    )
  }
}
export default Logout