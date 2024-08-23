import { Fragment } from 'react';
import {useState} from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navs from './components/Navs/Navs.js';
import Slider from './components/Home/Slider.js';
import Footer from './components/Home/Footer.js';


function App() {

  return (
    <Fragment>
        <Navs/>
        <Home/>
        <Slider/>
        <Footer/>
    </Fragment>
  );
}

export default App;
