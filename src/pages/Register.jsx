import React from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import { useShopContext } from '../context/ShopContext';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const Register = () => {
  const { register } = useShopContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      await register({ username, password }); // Use register function from context
      toast.success("Registration successful!"); // Show success toast
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`); // Show error toast
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Username' required />
        <input type="password" name="password" placeholder='Password' required />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;
