import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Location from './Location/Location';
import Crud from './Crud/Crud';
import Footer from './Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Products/>
    <Crud/>
    <Location/>
    <Footer/>
  </React.StrictMode>
);


