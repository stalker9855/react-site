import React from "react";
import { Link } from "react-router-dom";
import './Products.css';



function Products(props) {
  return (
    <>
    <div className={`card ${props.isChecked ? "checked" : ""}`}
     >
      <div className="card__body">
        <img src={props.img} />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
        <div className="card__button">
        <Link to={`/${props.id}`}><button>More</button></Link>
        <button id={props.isChecked? "add" : ""} onClick={props.onCardClick}>{props.isChecked? <>Remove</> : <>Add</>}</button>
        </div>
    </div>
    </>
  )
}

export default Products;
