import React, { Fragment } from "react";
import {useState} from 'react';
import Header from './Header.js';
import imgmiddle from './../../assets/imgmiddle.jpg';
import juice from './../../assets/juice.JPG';
import tea from './../../assets/tea.jpg';
import coffee from './../../assets/coffee.jpg';
import customers from './../../assets/customers.jpg'
import './Home.css';



const Home = ()=>{

  return(
    <Fragment> 
       <Header/>
       <section className="numbers">
          <div className="container text-center">
              <div className="row">
                 <div className="col-md-3">
                     <h2>1287+</h2>
                     <h6>SEVENS</h6>
                     <hr/>
                 </div>
                 <div className="col-md-3">
                     <h2>1287+</h2>
                     <h6>SEVENS</h6>
                     <hr/>
                 </div>
                 <div className="col-md-3">
                     <h2>1287+</h2>
                     <h6>SEVENS</h6>
                     <hr/>
                 </div>
                 <div className="col-md-3">
                     <h2>1287+</h2>
                     <h6>SEVENS</h6>
                     <hr/>
                 </div>
              </div>
          </div>
       </section>
       <section className="middlesection" id="aboutus_link">
          <div className="container">
            <div className="row mx-auto">
                <div className="col-md-6 ml-auto my-2">
                   <img className="img-fluid" src={imgmiddle} title="imgmiddle" id="imgmiddle" alt="{image}"/>
                </div>
                <div className="col-md-6 ml-auto my-2">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn btn-outline-warning"><a href="#">Order Now</a></button>
                </div>
            </div>
          </div>
       </section>
       <section className="bgdiv">
          <div className="container">
             <div className="row">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
             </div>
          </div>
       </section>
     <section className="orderdiv" id="food_link">
         <div className="container bg-light">
             <div className="row text-center py-5">
                  <h3>Our Drinks</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
             </div>
             <div className="row my-2">
               <div className="col-sm  my-2 orderdiv-1">
                <img className="img-fluid p-2" src={juice} alt="juice"/>
                <h4>juice</h4>
                <p>25EGP  <del>30EGP</del></p>
                <button>Order Now</button>
               </div>
               <div className="col-sm  my-2 orderdiv-2">
               <img className="img-fluid p-2" src={coffee} alt="juice"/>
                <h4>coffee</h4>
                <p>15EGP  <del>20EGP</del></p>
                <button>Order Now</button>
               </div>
               <div className="col-sm  my-2 orderdiv-3">
               <img className="img-fluid p-2" src={tea} alt="juice"/>
               <h4>tea</h4>
               <p>10EGP  <del>15EGP</del></p>
               <button>Order Now</button>
               </div>
             </div>
          </div>
       </section>
 

    </Fragment>
    
  );
}



export default Home;
