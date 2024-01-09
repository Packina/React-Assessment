
import React, { useState } from 'react';
import UserSectorTable from './UserSectorTable';

const User = ({ setDisplayText }) => {
  const handleUserClick = () => {
    setDisplayText('Generation Thailand - User Sector');
  };

  return (
    <div>
      <button onClick={handleUserClick}>User Home Sector</button>
      <UserSectorTable />
    </div>
  );
};

export default User;
