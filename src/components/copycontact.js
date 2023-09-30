import React from 'react';
import {useState} from 'react'

const Addcontacts = () => {
    const [contactlist,setContactlist] = useState({name:"",email:""})
    const handleChange =(e)=>{
 if (e.target.name==="myname"){
  setContactlist({...contactlist,name:e.target.value})
 }
 else{
    setContactlist({...contactlist,email:e.target.value})
 }
    }
   
    
  return (
  <>
  <form className="px-4 flex flex-col">
    <div className="py-2">
    <label className="px-4">Name</label>
    <input type="text"  placeholder="Enter  Name" value={contactlist.name} name="myname" onChange={handleChange}/>
    </div>
    <div className="py-2">
    <label className="px-4">Email</label>
    <input type="email" placeholder="Enter Email" value={contactlist.email} name="myemail" onChange={handleChange}/>
    </div>
    <button className="bg-red-500 hover:bg-blue-300 text-white font-bold  rounded w-1/3 ">
        <div className="text-yellow-200 text-xl  text-center font-bold ">Add Contacts</div>
    </button>
  </form>
  </>  
  )
}

export default Addcontacts