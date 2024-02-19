import React, { useState } from 'react';

const RoleScreen = ({ grantDashboardAccess }) => {
  const [newUser, setNewUser] = useState('');

  const handleGrantAccess = () => {
    grantDashboardAccess(newUser);
    setNewUser('');
  };

  return (
    <div>
      <h2>Role Screen</h2>
      <input
        type="text"
        placeholder="Enter username to grant dashboard access"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleGrantAccess}>Grant Access</button>
    </div>
  );
};

export default RoleScreen;