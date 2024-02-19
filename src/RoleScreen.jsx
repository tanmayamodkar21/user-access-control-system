// import React, { useState } from 'react';

// const RoleScreen = ({ grantDashboardAccess }) => {
//   const [newUser, setNewUser] = useState('');

//   const handleGrantAccess = () => {
//     grantDashboardAccess(newUser);
//     setNewUser('');
//   };

//   return (
//     <div>
//       <h2>Role Screen</h2>
//       <input
//         type="text"
//         placeholder="Enter username to grant dashboard access"
//         value={newUser}
//         onChange={(e) => setNewUser(e.target.value)}
//       />
//       <button onClick={handleGrantAccess}>Grant Access</button>
//     </div>
//   );
// };

// export default RoleScreen;


import React, { useState } from 'react';

const RoleScreen = ({ users, grantDashboardAccess }) => {
  const [newUser, setNewUser] = useState('');

  // Check if 'users' object is available and not empty
  if (!users || Object.keys(users).length === 0) {
    return <div>No users available</div>;
  }

  const handleGrantAccess = () => {
    grantDashboardAccess(newUser);
    setNewUser('');
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
    </div>
  );
};

export default RoleScreen;
