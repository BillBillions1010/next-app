/**********************************
*** /login/page.tsx
***********************************/
import React from 'react';
import LoginForm from 'components/LoginForm';
import Login from '@/login/Login';


const HomePage: React.FC = () => {
  const handleLogin = (data: { username: string; password: string }) => {
    // Your login logic goes here
    console.log('Login data:', data);
  };

  return (
    <div>
      <h1>Welcome to my next-site app</h1>
      <Header />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default HomePage;