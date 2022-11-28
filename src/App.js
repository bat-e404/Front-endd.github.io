
import './App.css';
import AlertOferta from './componet/AlertOferta';
import NavBar from './componet/NavBar';
import Home from './componet/Home';
import Products from './componet/Products';
import Footer from './componet/Footer';
import {Routes,Route} from 'react-router-dom';
import Product from './componet/Product';
import Nosotros from './componet/Nosotros';
import Login from './componet/Login';
import Registro from './componet/Registro';


function App() {
  return (
    <>
      <AlertOferta/>
      <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/products/:id" element={<Product/>}/>
      <Route exact path='/nosotros' element={<Nosotros/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/registro' element={<Registro/>}/>
    </Routes>  
  
    <Footer/>
    </>
  );
}

export default App;
