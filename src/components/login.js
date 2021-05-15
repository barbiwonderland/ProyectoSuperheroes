import React, { Component,setState,useState
 } from 'react'
 import "./styles/form.css";

export default function Login() {

    return (
        <React.Fragment>
        <div className="wrapper fadeInDown">
        <div id="formContent">
       
          <div className="fadeIn first">
              <h5>SuperHero</h5>
          </div>
      
    <form action="">
 
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
            </form>
        
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
      
        </div>
      </div>
      </React.Fragment>
    )
}
