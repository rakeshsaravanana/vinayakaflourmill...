import React, { useEffect, useState } from 'react';


const Edituserform = (props) => {
    const [user,setUser] =useState(props.currentUser);


    //Hook effect is used here for changing edit values dynamically
    useEffect(()=>{
        setUser(props.currentUser)
    },[props])


    // This function is used for getting input values from the user form.
    const handleInputChange =(event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value})
  
    }
    return(
    <>
    <form className='form' onSubmit={
            event=>{
              event.preventDefault();
              if(!user.username || !user.review) return;
              props.updateUser(user.id,user);
             
            }}>
        <label className='label' >Username</label>
        <input type='email' onChange={handleInputChange} name='username' value={user.username}  placeholder='Enter your email' className='emailinput'/>
        <label className='label'>Review</label>
        <textarea type='text' onChange={handleInputChange} name='review' value={user.review} placeholder='Add a comment'  className='reviewinput'/>
        <button className='reviewbtn'>Update Review</button>
        <button className='cancelbtn' onClick={()=>{
                props.setEditing(false);
              }} >Cancel</button>
    </form>
    </>  
    )
}

export default Edituserform;