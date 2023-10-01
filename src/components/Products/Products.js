import React from "react";
import './Products.css';



function Products(props) {
  return (
    <div className={`card ${props.isChecked ? "checked" : ""}`}
      onClick={props.onCardClick}>
      <div className="card__body">
        <img src={props.img} />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  )
}

export default Products;
