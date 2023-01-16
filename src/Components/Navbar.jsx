import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaUser,
  FaHouseUser,
  FaSignInAlt,
} from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const avtarStyle={ display: 'flex', position: 'absolute', left: '35px', alignItems: 'center', top:'25px' }
  
  return (
    <>
       <div>
        <NavLink to='/'>
        <h1 style={avtarStyle}>FunctionUp🧑‍🎓</h1>
        </NavLink>
        </div>
      <nav className="main-nav">
       <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
              <li>
                <NavLink to="/">
                <a href="">< FaHouseUser  /></a>
                Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">
                    <a href="">< FaInfoCircle  /></a>
                about</NavLink>
              </li>
              <li >
                <NavLink to="/Login"> 
                <a href=""> < FaSignInAlt /> </a>
                Log in</NavLink>
              </li>
              <li>
                <NavLink to="/Registeration">
                <a href=""><  FaUser /></a>
                Registeration</NavLink>
              </li>
            </ul>
        </div>

        {/*  social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <NavLink to="/">
             
          <CgProfile style={{fontSize:"30px",marginLeft:"200px"}} />
          </NavLink>
          </ul>

          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;