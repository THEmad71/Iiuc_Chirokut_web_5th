import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import StudentPage from './StudentPage';
import Home from './Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Route */}
      <Route
        path="/student"
        element={isAuthenticated ? <StudentPage /> : <Navigate to="/signin" />}
      />

      {/* Fallback for Undefined Routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
