import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Contactlist = ({contact,removeContact}) => {
    
  const contactlist = contact.map((val) => (
    <div key={val.id} className="bg-yellow-200 rounded-lg border border-yellow-400 p-4 mb-4 w-1/3 flex flex-row">
       <div> 
        <div className="font-semibold text-yellow-800">{val.data.myname}</div>
      <div className="text-gray-600">{val.data.myemail}</div>
      </div>
      <span className="px-4" onClick ={()=>removeContact(val.id)}> <DeleteForeverIcon  style={{ color: "red" ,fontSize:54}}  /></span>

    </div>
  ));

  return (
    <><div className="p-4">{contactlist}</div></>
    
  );
}

export default Contactlist;
