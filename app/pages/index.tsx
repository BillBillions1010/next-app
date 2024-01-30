// pages/index.tsx
import React from 'react';
import LoginForm from '../pages-sections/Components-Sections/SectionLogin';

const HomePage: React.FC = () => {
  
  const handleLogin = (data: { username: string; password: string }) => {
    
    console.log('Login data:', data);
  };
let poo = 'you Pood';
  return (
    <div>
      <h1>Welcome to Next-Site</h1>
      <h2>This is app/pages/index.js</h2>
      <p>Login logic is turned off {/*<LoginForm onLogin={handleLogin} />*/}</p>
      <p>{poo}</p>

    </div>
  );
};

export default HomePage;