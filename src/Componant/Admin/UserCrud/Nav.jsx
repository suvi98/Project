import React, { Component } from 'react';

import { NavLink } from "react-router-dom";
class Nav extends Component {


    render() {
        return (
            <div>
             <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
        
          <div>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/adminCrud">
                  Home
                </NavLink>             
              </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/addAdmin">
                   AddAdmin
                </NavLink>             
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/editAdmin/:a_id">
                  UpdateAdmin
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



export default Nav;