import React,{useState} from 'react'

const Addcontacts = ({passData}) => {
    const [contactlist,setContactlist] = useState({myname:"",myemail:""})
    const handleChange =(e)=>{
         setContactlist({...contactlist,[e.target.name]:e.target.value})
       
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      if(!contactlist.myname ||!contactlist.myemail){
      return alert("you r missing some details")
      }
      console.log(contactlist)
      setContactlist({myname:"",myemail:""})
      passData(contactlist);

    }

    
  return (
  <>
  <form className="px-4 flex flex-col" onSubmit={handleSubmit}>
    <div className="py-2">
    <label className="px-4">Name</label>
    <input type="text"  placeholder="Enter  Name" value={contactlist.myname} name="myname" onChange={handleChange}/>
    </div>
    <div className="py-2">
    <label className="px-4">Email</label>
    <input type="email"  placeholder="Enter Email" value={contactlist.myemail} name="myemail" onChange={handleChange}/>
    </div>
    <button className="p-2 bg-red-500 hover:bg-blue-300 text-white font-bold  rounded w-1/3 ">
        <div className="text-yellow-200 text-xl  text-center font-bold " type="submit">Add Contacts</div>
    </button>
  </form>
  </>  
  )
}

export default Addcontacts