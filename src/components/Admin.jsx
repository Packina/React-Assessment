import React, { useState } from 'react';
// import './Admin.css';
import { nanoid } from 'nanoid';

export const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [editContactId, setEditContactId] = useState(null);
  const [addFormData, setAddFormData] = useState({
    id: '',
    name: '',
    lastname: '',
    position: ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setAddFormData({
      ...addFormData,
      [fieldName]: fieldValue
    });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      lastname: addFormData.lastname,
      position: addFormData.position
    };

    setContacts([...contacts, newContact]);
    setAddFormData({
      id: '',
      name: '',
      lastname: '',
      position: ''
    });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: addFormData.name,
      lastname: addFormData.lastname,
      position: addFormData.position
    };

    const newContacts = contacts.map((contact) =>
      contact.id === editContactId ? editedContact : contact
    );

    setContacts(newContacts);
    setEditContactId(null);
  };

  return (
    <div className='app-container'>
      <div className='divForm'>
        <h2>Create User Here</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type='text'
            name='name'
            required='required'
            placeholder='Name'
            value={addFormData.name}
            onChange={handleAddFormChange}
          />

          <input
            type='text'
            name='lastname'
            required='required'
            placeholder='Last Name'
            value={addFormData.lastname}
            onChange={handleAddFormChange}
          />

          <input
            type='text'
            name='position'
            required='required'
            placeholder='Position'
            value={addFormData.position}
            onChange={handleAddFormChange}
          />

          <button type='submit'>Save</button>
        </form>
      </div>
      <div className='divTable'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.lastname}</td>
                <td>{contact.position}</td>
                <td><button>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
