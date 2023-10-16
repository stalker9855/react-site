import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MilkshakeDetail from './components/Milkshake-detail/MilkshakeDetail';


function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: require("../src/images/milkshakes/milkshake3.jpg"),
      isChecked: false,
      title: "Riverdale Milkshake",
      description: "Shake shake shake"
    },
    {
      id: 2,
      img: require("../src/images/milkshakes/milkshake2.jpg"),
      isChecked: false,
      title: "Coffe Milkshake",
      description: "Shake shake shake" 
    },
    {
      id: 3,
      img: require("../src/images/milkshakes/milkshake1.jpg"),
      isChecked: false,
      title: "Bailey's Cookies Milkshake",
      description: "Shake shake shake"
    },
    { 
      id: 4,
      img: require("../src/images/milkshakes/milkshake4.jpg"),
      isChecked: false,
      title: "Biscoff Milkshake",
      description: "Shake shake shake" 
    }
  ]);
  return (
    <>
      <BrowserRouter>
        <div className='bg'>
          <Routes>
            <Route  path="/" element={<Home products={products} setProducts={setProducts}/>}/>
            <Route  path="*" element={<div>Not found</div>}/>
            <Route path=":id" element={<MilkshakeDetail products={products}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
