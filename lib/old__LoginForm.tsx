// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import React, {useState} from 'react';

//Construct options for LoginForm
interface LoginFormProps {
  onLogin: () =>{
    data: { 
      uName: string; /* Username */
      fName: string; /* First Name */
      lName: string; /* Last Name */
      userID: number;
      email: string;
      password: string;
    } = void 
    console.log(LoginFormProps);
  };
}
// from gpt
const handleLogin = (data: {
  uName: string;
  fName: string;
  lName: string;
  userID: number;
  email: string;
  password: string;
}) => {
  void
  // Your login logic here
  
  console.log('Login data:', data);
};


// Usage of the LoginForm component
const MyComponent = () => {
  return (
  
  {LoginForm onLogin={handleLogin}}

  );

}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()

  }

<form onSubmit={handleSubmit}></form>

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { 
    // Handle form submission
    uName: string; 
    password: string;
   // fName: string; /* First Name */
    //lName: string; /* Last Name */
    //userID: number;
    //email: string;
  
  }) => {
    LoginForm};
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>User Name:</label>
      <input type='text' id='username' {...register('username', { required: true })} />

      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' {...register('password', { required: true })} />

      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;