import './App.css';
import React from 'react';
import { Component } from 'react';

class App extends Component{
  render() {
  return (
  <>  
    <section id='Homepage'>
    <div className="landingpage">
    <div className="maintext">
      <div className="text1">
      We offer <span>the finest flour</span> ever can buy.
      </div>
      <div className="text2">
      To enhance your home cooking.
      </div>
      <div className="text3">
       Call us <span>@XXXXXXX846</span>
      </div>
      <button className='btn'>Call Us</button>
      </div>
   </div>
   </section> 
  </>
  );
}
}
export default App;
