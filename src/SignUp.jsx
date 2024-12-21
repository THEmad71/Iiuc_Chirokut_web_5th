import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Example Sign-Up logic (You can integrate with backend for real-world apps)
    if (email && password) {
      // Proceed to next step (you can add more checks, e.g., email validation)
      // For now, we'll just show a message and navigate to the Sign-In page.
      alert('Sign Up successful! Please sign in.');
      navigate('/signin');
    } else {
      setError('Both fields are required.');
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
            Sign Up
          </button>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </form>

        <p className="text-sm mt-4 text-center">
          Already have an account?
          <a href="/signin" className="text-[#FF8C42] font-bold">Sign In</a>
        </p>

        

        <div className="mt-6 text-center">
  <button
    onClick={() => navigate('/home')} // Match the casing with the route
    className="inline-block bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
  >
    Back to Home
  </button>
</div>





      </div>
    </div>
  );
};

export default SignUp;
