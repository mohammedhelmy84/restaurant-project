import React from "react";
import {useState} from "react";
import "./Header.css";
const Header = () =>{

  return(
   <header>
      <div className="container mt-2" id="Home"> 
        <div className="row">
          <div className="col-md-6 div1">
              <h2>	&#128512; </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <button>Order Now</button>
          </div>
          <div className="col-md-6 div2">
            
          </div>
          </div>
      </div>
   </header>

  );
}

export default Header;