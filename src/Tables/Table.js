
import React from 'react';
import './table.css';

const Table = (props) => {
  return (
    <>
    <section className='table'>
    <table id='Table'>
        <thead>
            <tr>
                <th>Username</th>
                <th>Review</th>
                <th>Actions</th>
            </tr>
        </thead>
        {/* <hr/> */}
        <tbody>
            {props.users.length>0?(
               props.users.map((user)=>(
                <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.review}</td>
                <td>
                    <button onClick={()=>{
                        props.editrow(user)
                    }} className="button muted-button1" >Edit</button>
                    <button onClick={()=>props.deleteuser(user.id)} className="button muted-button2" >Delete</button>
                </td>
                </tr>
          
            )) 
            ):(
                <tr>
                    <td colSpan={3}>No reviews</td>
                </tr>
            )
              }
           
        </tbody>
    </table>
    </section>
    </>
  )
}

export default Table;