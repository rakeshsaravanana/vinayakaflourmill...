import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './footer.css';


const Footer = () => {
  
  return (
    <> 
    <footer>
    <div className='socialmedia'>
    <h2 className='queries'>Get in touch</h2>
    <a href='https://www.instagram.com/rakesh_sarav27/'><FontAwesomeIcon icon={faInstagram} className='media instagram' /> </a>
    <a href='#Homepage'><FontAwesomeIcon icon={faWhatsapp} className='media whatsap'/></a>
    </div>

    <div className='navlinks'>
    <a href='#Homepage'>Home</a>|
    <a href="#Product">Products</a>|
    <a href="#Review">Reviews</a>|  
    <a href="#Location">Locations</a>
    </div>
    
    
  
    <div id='copyright'>Copyright VFM &copy;2023</div>
     <div id='developed'>Designed & Developed by Rakesh</div>
    </footer>
    </>
  )
}

export default Footer;