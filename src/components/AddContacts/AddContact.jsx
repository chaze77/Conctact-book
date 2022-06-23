import React, { useState } from 'react';


const AddContact = ({addContact}) => {
const [name, setName] = useState("");
const [number, setNumber] = useState("");

function handleSave() {
  if (!name || !number) {
    alert("Заполните все поля!");
  } else {
    let newContact = {
      name,
      number,
         };
        //  e.preventDefault()
    addContact(newContact);
    // console.log(newContact);
   
  }
  
}
    return (
      
      <div>
      <input
      value={name}
      type="Name"
      onChange={(e) => setName(e.target.value)}
    />
    <input
      value={number}
      type="Number"
      onChange={(e) => setNumber(e.target.value)}
    />
            
    <button onClick={() => handleSave()}>Save</button>  
    </div>
        
        
      
    );
    
};

export default AddContact;