import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class HeaderUser extends Component {

    render() {
        return (
            <div>
                <div className="navigation" >
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Admin Section
          </NavLink>
          <NavLink className="navbar-brand bgcolor" to="/home">
                <span className='welcome'>Welcome, {localStorage.getItem("AdminUser")}</span>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  User
                  <span className="sr-only"></span>
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/adminCrud">
                Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctorCrud">
                Doctor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookAppoinment">
                      Appoinment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link"  to="/"
                style={{    backgroundColor: "cadetblue",
                 borderRadius: "5px"}}>
                  
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


export default HeaderUser;