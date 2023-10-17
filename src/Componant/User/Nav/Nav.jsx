import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css'

                  //user side navigation componant, one by one pages routes in navigation
class Nav extends Component {


    render() {
        return (
            <div>
                <div className="navigation" style={{filter: "drop-shadow(2px 4px 6px cadetblue)"}}>
      <nav className="navbar navbar-expand navbar-dark bg-light">
        <div className="container">
          <NavLink className="navbar-brand bgcolor" to="/">
           <img src="https://static.startuptalky.com/2019/11/Practo-logo-healthcare-startups.png" alt="" style={{height:"50px"}} />
          </NavLink>
          <NavLink className="navbar-brand bgcolor" to="/homeUser">
                <span className='welcome'>Welcome, {localStorage.getItem("LoginUser")}</span>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link bgcolor" to="/homeUser">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
            
              <li className="nav-item ">
                <NavLink className="nav-link bgcolor" to="/findDoctors">
                Find Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link bgcolor" to="/videoConsult">
                     Medicines
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link bgcolor" to="/status">
                      Status
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link bgcolor"  to="/"
                style={{    backgroundColor: "cadetblue",
                 borderRadius: "5px",color:"white",filter: "drop-shadow(2px 4px 6px black)"}}>
                      Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
           </div>
            </div>
        );
    }
}


export default Nav;