import React, { useState } from 'react'; // Import useState for managing loading state
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import { useShopContext } from '../context/ShopContext';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications


const Register = () => {
  const { register } = useShopContext();
  const [loading, setLoading] = useState(false); // State for loading indication

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Basic validation
    if (username.length < 3 || password.length < 6) {
      toast.error("Username must be at least 3 characters and password at least 6 characters.");
      return;
    }

    setLoading(true); // Set loading to true

    try {
      await register({ username, password }); // Use register function from context
      toast.success("Registration successful!"); // Show success toast
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`); // Show error toast
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Center the form */}
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"> {/* Card styling */}
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1> {/* Title styling */}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            placeholder='Username' 
            required 
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="password" 
            name="password" 
            placeholder='Password' 
            required 
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <button 
            type='submit' 
            disabled={loading} 
            className={`w-full p-2 text-white rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition duration-200`} 
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          <p className="mt-4 text-center">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
