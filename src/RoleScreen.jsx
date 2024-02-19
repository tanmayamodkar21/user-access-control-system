import React, { useState } from 'react';

const RoleScreen = ({ users, grantDashboardAccess, revokeDashboardAccess }) => {
  const [newUser, setNewUser] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const handleGrantAccess = () => {
    grantDashboardAccess(newUser);
    setNewUser('');
  };

  const handleRevokeAccess = () => {
    // Implement the logic to revoke access for the selected user
    // Assuming a user can only be selected for revoking if they were granted access before
    revokeDashboardAccess(selectedUser);
    setSelectedUser('');
  };

  return (
    <div>
      <h2>Role Screen</h2>
      <div>
        {Object.keys(users).map((username) => (
          <div key={username}>
            <label>
              <input
                type="radio"
                name="userAccess"
                value={username}
                checked={newUser === username}
                onChange={() => setNewUser(username)}
              />
              {username}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleGrantAccess}>Grant Access</button>

      <div>
        <h3>Revoke Access</h3>
        {Object.keys(users).map((username) => (
          <div key={username}>
            <label>
              <input
                type="radio"
                name="revokeAccess"
                value={username}
                checked={selectedUser === username}
                onChange={() => setSelectedUser(username)}
              />
              {username}
            </label>
          </div>
        ))}
        <button onClick={handleRevokeAccess}>Revoke Access</button>
      </div>
    </div>
  );
};

export default RoleScreen;
