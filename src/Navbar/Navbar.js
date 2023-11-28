import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
class Navbar extends Component{
  state={clicked:false};
  handleclick=()=>{
  this.setState({clicked:!this.state.clicked})
  }
    render(){
    return(
<>
    <nav>
        <a href="#Homepage" id='logo' >Vinayaka <br/><span>Flour</span><span>Mill</span></a>

        
        <ul id='navbar' className={this.state.clicked ? '#navbar active' :'#navbar'} >
          <li><a href='#Homepage' className='active'>
            <FontAwesomeIcon icon={faHouse} className='icon'/>Home</a></li>
          <li> <a href="#Product">
            <FontAwesomeIcon icon={faProductHunt} className='icon'/>Products</a></li>
          <li><a href="#Review">
            <FontAwesomeIcon icon={faStar} className='icon'/>Reviews</a></li>  
          <li><a href="#Location">
            <FontAwesomeIcon icon={faMapLocationDot} className='icon'/>Locations</a></li>
        </ul>
        

        <div id='mobile' onClick={this.handleclick}>
          <i id='bar' className={this.state.clicked?"fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
</>
        )
    }
}

export default Navbar