// import React, { useState } from 'react';

// const Registration = ({ handleRegistration }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     console.log(username, password);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleRegistration(username, password);
//         setUsername('');
//         setPassword('');
//     };

//     return (
//         <div>
//             <h1>Registration</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Registration;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = ({ handleRegistration }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/">Login here</Link>.
            </p>
        </div>
    );
};

export default Registration;