import React, { useState } from 'react';
import './crud.css';
import Table from '../Tables/Table';
import Adduserform from '../forms/Adduserform';
import Edituserform from '../forms/Edituserform';
const Crud = () => {
  // Sample data for fetching users into the review table.
  const userdata=[
    {id:1,username:'aakash@gmail.com',review:'Cost effective and best quality'},
    {id:2,username:'prabha23@gmail.com',review:'Good flour mill in our locality'},
    {id:3,username:'mani01@gmail.com',review:'Wet batter also grained here,nice hospitality!!!'},

];
// Add user function for review section
const adduser =(user)=>{
   user.id= users.length+1;
   setUsers([...users,user])
}
// Delete user function for deleting user in review table
const deleteuser=(id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

// useState for changing users information b/w components.

  const [users,setUsers]=useState(userdata);

// useState for updating(edit) the user data
     const[editing,setEditing]=useState(false);
     const initialFormState= {id:null,username:'',review:''};
     const[currentUser,setCurrentUser] =useState(initialFormState);

const editrow=(user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,username:user.username,review:user.review})
}
const updateUser=(id,updateUser)=>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id===id?updateUser:user)))
}

  return (
    <>  
    <h2 id='Review' className='heading'>Review</h2>
    <div className='container'>
      <div className='flex-row'>
           {editing?(<div>
            <h2 className='subheading'>Edit Review</h2>
            <Edituserform 
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}/>
          </div>):(<div>
            <Adduserform adduser={adduser} />
          </div>
            
          )}
           
        </div>

        <div className='flex-large'>
            <h2 className='subheading'>View Reviews</h2>
            <Table editrow={editrow} deleteuser={deleteuser} users={users}/>
        </div>
    </div>
    </>
  )
}

export default Crud;