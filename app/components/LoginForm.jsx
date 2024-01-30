/* v0.1.0 assisted with ChatGPT */
/* Untampered #2
*** to implement a login logic in a React application, you'll typically follow these steps:
1. Create a Form Component: Build a form component that collects user credentials (e.g., username and password).
2.  State Management: Use the useState hook to manage the state of the form inputs.
3. Handle Form Submission: Implement a function to handle the form submission. This function will likely include logic to validate the user's credentials (e.g., making an API call to a server or checking against a predefined list).
4. Authentication Status: Manage the authentication status using state. For example, you might have a state variable like isLoggedIn to track whether the user is authenticated.
5. Conditional Rendering: Based on the authentication status, conditionally render components. For example, show a dashboard if the user is authenticated or display a login form if not.
*/

/*
in this example:

The LoginForm component manages the state of username, password, and isLoggedIn.
The handleLogin function checks if the provided credentials match the hardcoded values. In a real application, you'd likely make an API call to a server for authentication.
The component conditionally renders either a welcome message and logout button or the login form based on the isLoggedIn state.
Remember, this is a basic example, and in a real-world scenario, you should handle authentication securely on the server side and consider using libraries like react-router for navigation.
*/
import React, { useState } from 'react';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    // Implement your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;