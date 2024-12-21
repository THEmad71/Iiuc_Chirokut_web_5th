import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Example Sign-In logic (You can integrate with backend for real-world apps)
    if (email === "test@example.com" && password === "12345") {

      setIsAuthenticated(true);
      // Redirect to student page after successful login
      navigate('/student'); 
    } else {
      setError('Wrong email or password. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF8C42] text-white py-2 rounded-md hover:bg-[#E07634]"
          >
            Sign In
          </button>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </form>

        <p className="text-sm mt-4 text-center">
  Don’t have an account?
  <a href="/SignUp" className="text-[#FF8C42] font-bold">Sign Up</a>
</p>

      </div>
    </div>
  );
};

export default SignIn;
