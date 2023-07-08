import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-success bg-opacity-50">
        <ul className="nav justify-content-center  ">
        <li className="nav-item">
            <NavLink
            className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}
            to=""
            style={({isActive}) => isActive ? {color:'red'} : {}}
              
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}
              to="/phone"
              aria-current="page"
            >
              PhoneDetail
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}
              to="/form"
              aria-current="page"
            >
              Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}
              to="/giohang"
              aria-current="page"
            >
              GioHang
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'}
              to="/datve"
              aria-current="page"
            >
              Dat Ve
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
