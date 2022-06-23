import axios from "axios";
import { useEffect, useState } from "react";
import List from "./components/List/List";
import AddContact from "./components/AddContacts/AddContact";
import "./App.css"




  const App = () => {
  const API = "http://localhost:8000/contacts"

  const [contacts, setContacts] = useState ([]);

  function addContact (newContact) {
    axios.post(API, newContact);
    getContacts();
  }

  async function  getContacts () {
    let res = await axios(API);
    setContacts(res.data);
   
    }
    console.log(contacts);

    //! Delete - DELETE
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts()
  }

// //! Details, Edit - GET API/id
// async function getOneContact(id) {
//   let res = await axios(`${API}/${id}`);
//   setContacts(res.data);
// }
// //! Update - PATCH, PUT
// async function updateContact(id, editedContact) {
//   await axios.patch(`${API}/${id}`, editedContact);
//   getContacts();
// }

    
  return   (
    <div className="App">
             

     <AddContact addContact = {addContact}/>
     <List getContacts= {getContacts} contacts = {contacts} deleteContact={deleteContact}/>

     </div>
  );
}



export default App;
