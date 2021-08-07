import React, { Component } from 'react';
import "./Navbar.css";
import {Link, withRouter} from "react-router-dom";
import Logo from '../Logo/Ablog.svg';

export class Navbar extends React.Component {
  render() {

    const Toggler = () =>{
          const navLinks = document.querySelector(".nav-container");
          const burger = document.querySelector(".burger");
          navLinks.classList.toggle("active");
          burger.classList.toggle("toggle");
      }

    return (
      <>
      <nav>
      <span className="burger" onClick={()=>Toggler()}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      </span>
        <span className="logo"><Link to="/"><img src={Logo} /></Link></span>
        <ul className="nav-container">
          {/*<li><Link to="/">Home</Link></li>*/}
          {/*<li><Link to="/about">About</Link></li>*/}
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
      <div className="margin"></div>
      </>
      );
  }
}

