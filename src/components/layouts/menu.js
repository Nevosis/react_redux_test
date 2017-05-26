import React from "react";
import {NavLink} from 'react-router-dom'
import "../../tmp.css"


// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <div className="primary-aside">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
        </ul>
      </div>
    </div>
  );
}
