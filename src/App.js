import Addcontacts from "./components/Addcontacts";
import Header from "./components/Header";
import Contactlist from './components/Contactlist';
import  { useState, useEffect } from 'react';
import uuid4 from "uuid4";
const App = () =>{
  const localStorageKey="contact";
  const [contact,setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})

  
   useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
 


  const passData = (data) =>{
   setContact([...contact,{id:uuid4(),data}])
   console.log(contact,"it is working")
}


 const removeContact =(id)=>{
  const updatedcontacts = contact.filter(item =>item.id!==id);
  setContact(updatedcontacts);
 }
  return (
  <>
  <Header/>
  <Addcontacts passData={passData}/>
  <Contactlist contact={contact} removeContact = {removeContact} />
  </>
  )
}
export default App;