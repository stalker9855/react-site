import '../../App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Home({products, setProducts}) {
  const [selectedProducts, setSelectedProducts] = useState(0);
  const handleClick = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].isChecked = !updatedProducts[index].isChecked;
    setProducts(updatedProducts);

    const count = updatedProducts.filter(product => product.isChecked).length
    setSelectedProducts(count)
  }
  return (
    <>
      <div className='bg'>
        <Header selectedProducts={selectedProducts}></Header>
        <Main products={products} handleClick={handleClick}/>
        <Footer />
      </div>
    </>
  );
}

export default Home;
