import React from "react";
import Products from "../Products/Products";
import "./Main.css" 



function Main({ products, handleClick}){
  return(
    <main className="wrapper">
      {products.map((product, index) => (
        <Products key={index} img={product.img} title={product.title} description={product.description}  isChecked={product.isChecked}
          onCardClick={() => handleClick(index)} />
      ))}
    </main>
  )
}

export default Main;
