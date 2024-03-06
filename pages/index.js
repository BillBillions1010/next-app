import React from "react";

// Function to generate a unique identifier
const id = () => {
  // Implementation of generating a unique ID, you can use any method here
  return Math.random().toString(36).substring(7);
};

export default function Index() {
    
    const UserInfo = () => {
        // Fixed syntax for returning a single object
        return {
            'uName': "Guest" + id(),
            'fName': 'John',
            'lName': 'Doe',
            'password': 'password123',
        };
    };
    
    // Retrieve user information
    const user = UserInfo();

    // Correct render method syntax
    return (
        <div>
            <h1>{user.uName}</h1>
            <p>First Name: {user.fName}</p>
            <p>Last Name: {user.lName}</p>
            <p>Password: {user.password}</p>
        </div>
    );
}