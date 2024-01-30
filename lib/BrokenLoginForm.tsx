import { useForm } from 'react-hook-form'; // Make sure to use named import

interface FormData {
  username: string;
  password: string;
}

export const LoginForm: React.FC<FormData> = () => {
  const { register, handleSubmit } = useForm<FormData>(); // Correct usage of useForm

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>User Name:</label>
      <input type='text' id='username' className='username' {...register('username')} />

      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' className='password' {...register('password')} />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default LoginForm;
