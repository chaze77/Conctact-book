import React, { useEffect } from 'react';

const List = ({getContacts, contacts, deleteContact}) => {
    console.log(contacts);
    useEffect(() => {
        getContacts();
    }, []);
    return <div>{contacts.map((item) => <div className='list' key={item.id}> {item.name}, {item.number}<button onClick={() => deleteContact(item.id)}>Delete</button> </div> )}</div>
 };
 

 
 export default List;