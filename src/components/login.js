import React, { Component,setState,useState
 } from 'react'
 import "./styles/form.css";
 import { setUserSession } from '../common';
 import axios from "axios";

function Login(props) {
  
    return (
        <React.Fragment>
            <div className="mt-5">
        <div className="wrapper fadeInDown   ">
        <div id="formContent">
       
          <div className=" fadeIn first">
              <h5>SuperHero</h5>
          </div>
      
    <form action="">
 
            <input type="text"  id="login" className="fadeIn second" name="login" placeholder="Usuario"/>
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Contraseña"/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
            </form>
        
          <div id="formFooter">
            {/* <a className="underlineHover" href="#">Forgot Password?</a> */}
          </div>
      
        </div>
      </div>
      </div>
      </React.Fragment>
    );
    }



export default Login;