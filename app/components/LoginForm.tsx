// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import React, {useState} from 'react';

// Construct options for LoginForm
interface LoginFormProps {
  onLogin: (
    data: { 
      uName: string; // Username
      fName: string; // First Name
      lName: string; // Last Name
      userID: number;
      email: string;
      password: string;
    }
    ) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { uName: string; password: string }) => {
    // Handle form submission
    onLogin(data);
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