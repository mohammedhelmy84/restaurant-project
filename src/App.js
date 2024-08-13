import { Fragment } from 'react';
import {useState} from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navs from './components/Navs/Navs.js';
import Slider from './components/Home/Slider.js';


function App() {

  return (
    <Fragment>
        <Navs/>
        <Home/>
        <Slider/>
    </Fragment>
  );
}

export default App;
