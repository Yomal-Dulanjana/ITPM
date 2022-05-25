import React from "react";
import "../Styles/header.css";


function Header() {
  return (
    <div class="wrapper">
      <div class="sidebar">
       
       
     
      </div>
      <div class="main_content">
        
      <header  class="fixed-top">
       
        <div class="header">
        
       
          <div>
          <div id="logott">
              
             
           </div>
            <div id="hname">
              <h1><b> School Managment System</b></h1> 
            </div>


            <div id="dateandtime">
            <p>  {new Date().getFullYear()} : {new Date().getMonth()} : {new Date().getDate()} - {new Date().toLocaleTimeString()}</p>

            </div>

            <div id="login">
              <a
                href="/aprofile"
                style={{ textDecoration: "none", color: "rgb(218, 213, 213)"}}
              >
                {" "}
                <i class="fas fa-user-alt"></i>{" "}
              </a>
            </div>
          </div>

          <div className="menupp" style={{ width: "100%"}}>
            <li className="menupp">
              <a></a>
            </li>
           
          
            <li className="menupp mr-0">
              <a></a>
            </li>
 
            <li class="menupp">
              <a class="actively" href="/aboutus">
                About Us
              </a>
            </li>
            <li class="menupp">
              <a href="/services">Services</a>
            </li>
            <li class="menupp">
              <a href="/contactus">Contact Us</a>
            </li>
            <li class="menupp">
              <a href="/gallery">Gallery</a>{" "}
            </li>
          </div>
        </div>

        </header>
      </div>
    
    </div>
  );
}

export default Header;
