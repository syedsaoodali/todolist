// import React, { useState, useEffect } from 'react';
// import Login from './component/Login';
// import AddTodo from './component/AddTodo';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {

//     const loggedIn = localStorage.getItem('isAuthenticated');
//     if (loggedIn) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = (username, password) => {

//     const validUsername = 'admin';
//     const validPassword = 'password';

//     if (username === validUsername && password === validPassword) {
//       setIsAuthenticated(true);
//       localStorage.setItem('isAuthenticated', true);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('isAuthenticated');
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <div>
//           <AddTodo />
//           <button className="w-20 absolute top-10 right-0 bg-blue-500 text-white py-2 rounded"  onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default App;





import React, { useState, useEffect } from 'react';
import Signup from './component/Signup';
import Login from './component/Login';
import AddTodo from './component/AddTodo';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // To track if user is registered

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    // Fetch saved credentials from localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignup = (username, password) => {
    // Save new credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setIsRegistered(true);
    alert('Signup successful! You can now log in.');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <AddTodo />
          <button  className="w-20 absolute top-10 right-0 bg-blue-500 text-white py-2 rounded" onClick={handleLogout}>Logout</button>
        </div>
      ) : isRegistered ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Signup onSignup={handleSignup} />
      )}
    </div>
  );
};

export default App;
