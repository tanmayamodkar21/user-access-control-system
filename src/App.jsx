import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login';
import Registration from './Registration';
import HomeScreen from './HomeScreen';
import DashboardScreen from './DashboardScreen';
import RoleScreen from './RoleScreen';

// Sample static users
const users = {
  superUser: {
    username: 'superUser',
    password: 'superPassword',
    role: 'superUser',
    dashboardAccess: true,
  },
  user1: {
    username: 'user1',
    password: 'user1',
    role: 'user',
    dashboardAccess: false,
  },
  user2: {
    username: 'user2',
    password: 'user2',
    role: 'user',
    dashboardAccess: false,
  },
};

const history = createBrowserHistory();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (username, password) => {
    const user = users[username];
    if (user && user.password === password) {
      setCurrentUser(user);
      setLoggedIn(true);
      setError('');
      history.push('/'); // Redirect to homepage after login
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false);
    history.push('/login'); // Redirect to login page after logout
  };

  const grantDashboardAccess = (user) => {
    if (currentUser.role === 'superUser' && users[user]) {
      users[user].dashboardAccess = true;
      setCurrentUser({
        ...currentUser,
        dashboardAccess: true,
      });
    }
  };

  const revokeDashboardAccess = (user) => {
    if (currentUser.role === 'superUser' && users[user]) {
      users[user].dashboardAccess = false;
      setCurrentUser({
        ...currentUser,
        dashboardAccess: false,
      });
    }
  };


  const canAccessDashboard = () => {
    return currentUser && currentUser.dashboardAccess;
  };

  const handleRegistration = (username, password) => {
    // For simplicity, let's assume we're adding a new user with 'user' role
    users[username] = {
      username,
      password,
      role: 'user',
      dashboardAccess: false,
    };
    setError('');
  };

  return (
    <Router history={history}>
      <div>
        {!loggedIn ? (
          <Routes>
            <Route path="/registration" element={<Registration handleRegistration={handleRegistration} />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} error={error} />} />
            <Route
              path="/*"
              element={<Navigate to="/login" />} // Redirect to /login for any unknown routes
            />
          </Routes>
        ) : (
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={() => canAccessDashboard() && history.push('/dashboard')}
                  >
                    Dashboard
                  </Link>
                </li>
                {currentUser.role === 'superUser' && (
                  <li>
                    <Link to="/role">Role Screen</Link>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="/dashboard"
                element={canAccessDashboard() ? <DashboardScreen /> : <h2>You do not have access to the dashboard</h2>}
              />
              {currentUser.role === 'superUser' && (
                <Route
                  path="/role"
                  element={<RoleScreen users={users} grantDashboardAccess={grantDashboardAccess} revokeDashboardAccess={revokeDashboardAccess} />}
                />
              )}
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
