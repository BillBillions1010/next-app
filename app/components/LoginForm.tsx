// components/LoginForm.tsx
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onLogin: (data: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { username: string; password: string }) => {
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