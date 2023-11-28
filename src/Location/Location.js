import React from 'react';
import './location.css';


const Location = () => {
  return (
    <> 
     <h2 id='locationhead'>Location</h2>
     <section id='Location'>
     <div className='locations' >
      <div className='ramapuram'>
        <h2>Ramapuram</h2>
        <address>1/2 Naidu street <br/>Venkateshwara Nagar Ramapuram <br/> Chennai-600089.</address>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.040261850816!2d80.17249327369291!3d13.033108113529574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d808760c7d%3A0xe89bba6a6f9015d8!2sFresh%20Men%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1700803712822!5m2!1sen!2sin" 
        width="600" height="450" 
        style={{border:'0'}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
          
        </iframe>
      </div>

      <div className='mangadu'>
        <h2>Mangadu</h2>
        <address>28/x Charles nagar<br/>Pattur,Mangadu <br/> Chennai-600122.</address>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.247765434848!2d80.11102457358993!3d13.019887913820801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261d86d393e63%3A0xc4d3e1b22c419233!2sVinayaka%20flour%20mill!5e0!3m2!1sen!2sin!4v1699256944479!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{border:"0"}} 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
  </div>
  </section>
    </>
  )
}

export default Location;