import React, { useState } from 'react';
import './Adduserform.css';

const Adduserform = (props) => {
  const initialFormState= {id:null,username:'',review:''};

  const[user,setUser]=useState(initialFormState);
  const handleInputChange =(event)=>{
      const {name,value}=event.target;
      setUser({...user,[name]:value})

  }


  return (
    <>
    <form className='form' onSubmit={
      event=>{
        event.preventDefault();
        if(!user.username || !user.review) return;
        props.adduser(user);
        setUser(initialFormState)
      }
    }>
        <label className='label'>Username</label>
        <input type='email' onChange={handleInputChange} name='username' value={user.username}  placeholder='Enter your email' className='emailinput'/>
        <label className='label'>Review</label>
        <textarea type='text' onChange={handleInputChange} name='review' value={user.review} placeholder='Add a comment'  className='reviewinput'/>
        <button className='reviewbtn'>Add Review</button>
    </form>
    </>
  )
}

export default Adduserform;