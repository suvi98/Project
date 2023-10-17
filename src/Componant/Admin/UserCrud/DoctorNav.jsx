import React, { Component } from 'react';

import { NavLink } from "react-router-dom";
class UserNav extends Component {
   

    render() {
        return (
            <div>
             <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
        
          <div>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/doctorCrud">
                  Home
                </NavLink>             
              </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/doctorAdd">
                   AddDoctor
                </NavLink>             
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctorEdit/:d_id">
                  UpdateDoctor
                  <span className="sr-only"></span>
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



export default UserNav;