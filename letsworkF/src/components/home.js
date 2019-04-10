import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import VideoHero from './homevideo';


class Home extends Component {
  render() {
    return (
      <HashRouter>
        <>
     
      <VideoHero/>
      
      </>
      </HashRouter>
      
    );
  }
}

export default Home;
