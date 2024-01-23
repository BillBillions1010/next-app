// pages/index.tsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const HomePage: React.FC = () => {
  const handleLogin = (data: { username: string; password: string }) => {
    // Your login logic goes here
    console.log('Login data:', data);
  };

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default HomePage;