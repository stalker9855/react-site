import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';



function App() {
  const [products, setProducts] = useState([
    { img: require("../src/images/milkshakes/milkshake3.jpg"),
      isChecked: false,
      title: "Riverdale Milkshake",
      description: "Shake shake shake"
    },
    { img: require("../src/images/milkshakes/milkshake2.jpg"), isChecked: false,
      title: "Coffe Milkshake",
      description: "Shake shake shake" 
    },
    { img: require("../src/images/milkshakes/milkshake1.jpg"),
      isChecked: false,
      title: "Bailey's Cookies and Cream Milkshake",
      description: "Shake shake shake"
    },
    { img: require("../src/images/milkshakes/milkshake4.jpg"),
      isChecked: false,
      title: "Biscoff Milkshake",
      description: "Shake shake shake" 
    }
  ]);
  const [selectedProducts, setSelectedProducts] = useState(0);
  const handleClick = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].isChecked = !updatedProducts[index].isChecked;
    setProducts(updatedProducts);

    const count = updatedProducts.filter(product => product.isChecked).length
    setSelectedProducts(count)
  }
  return (
    <div className='bg'>
      <Header selectedProducts={selectedProducts}></Header>
      <Main products={products} handleClick={handleClick}/>
      <Footer />
    </div>
  );
}

export default App;
