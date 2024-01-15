import React from "react";
import { useState } from "react";

const Navbar = () => {
  
    const data = {
        bgColor : 'black',
        clr : 'white'
    }

    // console.log(data);
  
  return (
    <div className="Navbar_Container">
      {/* Navbar */}
      <div className="navbar" style={{
        backgroundColor : data.bgColor,
        color : data.clr
      }}>
        <p className="textUtils">TextUtils</p>
        <ul className="lists">
          <li style={{ color: "black" }}>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        {/* Toggle Button */}
        <div className="checkbox-apple">
          <input className="yep" id="check-apple" type="checkbox" />
          <label htmlFor="check-apple"></label>
          <p className="darkMode">Enable Dark Mode</p>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
