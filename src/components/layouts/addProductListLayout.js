import React from "react";
import {NavLink} from 'react-router-dom'
import ProductListContainer from "../container/ProductListContainer";
import AddFormContainer from "../container/AddFormContainer";
import "../../tmp.css"


// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="addProductList">
      <AddFormContainer searchType={props.searchType}/>
      <ProductListContainer />
    </div>
  );
}
