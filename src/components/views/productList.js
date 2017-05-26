import React from "react";

// Using "Stateless Functional Components"
export default function(props) {
  if (props.isFetching) return <div>Loading...</div>;
  else
    return (
      <div className="data-list">

        {props.products.map(product => {
          return (
            <div key={product.id} className="data-list-item">
              {product.name}
            </div>
          );
        })}

      </div>
    );
}
