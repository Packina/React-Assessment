import React, { useState } from 'react';
import Admin from './Admin';
import './Home.css'

export const Home = () => {
  const [displayText, setDisplayText] = useState('Generation Thailand React - Assessment');
  const [showUserSectorTable, setShowUserSectorTable] = useState(false);
  const [showAdminSectorTable, setShowAdminSectorTable] = useState(false);

  const titleStyle = {       
    fontSize: '50px',     
    fontWeight: 'bold',   
    margin: '20px'
    
  };
const buttonStyles = {
  fontSize: '18px',
  fontWeight: 'bold'
}
  const handleUserClick = () => {
    setDisplayText('Generation Thailand - User Sector');
    setShowUserSectorTable(true);
    setShowAdminSectorTable(false);
  };

  const handleAdminClick = () => {
    setDisplayText('Generation Thailand - Admin Sector');
    setShowUserSectorTable(false);
    setShowAdminSectorTable(true);
  };

  return (
    <div className='home-content'>
      <h1 style={titleStyle} >{displayText}</h1>
    <div className='buttonDiv'>
      <button onClick={handleUserClick} style={buttonStyles}>User Home Sector</button>
      <button onClick={handleAdminClick} style={buttonStyles}>Admin Home Sector</button>
    </div>
      {showUserSectorTable && <UserSectorTable />}
      {/* {showAdminSectorTable && <AdminSectorTable />} */}
      {showAdminSectorTable && <Admin />}
    </div>
  );
};

const UserSectorTable = () => {
  const userData = [
    { id: 1, name: 'David', lastname: 'Wang', position: 'Role 1' },
    { id: 2, name: 'Somchai', lastname: 'Seataow', position: 'Role 2' },
  ];

  return renderTable('User', userData);
};

const AdminSectorTable = () => {
  const adminData = [
    { id: 1, name: 'Thomos', lastname: 'Pakinson', position: 'Admin Role 1' },
    { id: 2, name: 'Jeang', lastname: 'Lookchinpla', position: 'Admin Role 2' },
    
  ];

  return renderTable('Admin', adminData);
};

const renderTable = (type, data) => (

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td>{item.position}</td>
        </tr>
      ))}
    </tbody>
  </table>
);


export default Home;

