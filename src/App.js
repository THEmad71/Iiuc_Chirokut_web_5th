import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import ClassroomBefore from './Before Signin/Classroom_before'; // The Classroom_before component
import ComplaintsBefore from './Before Signin/ComplaintsBefore'
import AboutUs from './Before Signin/AboutUs'
import StudentDashboard from './After Studnet signin/Student_dashboard';
import MyProfile from './After Studnet signin/MyProfile';
import Studymaterial from './After Studnet signin/Studymaterial';
import StudentClassroom from './After Studnet signin/StudentClassroom'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/classroom" element={<ClassroomBefore />} />
      <Route path="/ComplaintsBefore" element={<ComplaintsBefore />} />
      <Route path="/AboutUs" element={<AboutUs />} />

      <Route path="/" element={<StudentDashboard />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/Studymaterial" element={<Studymaterial />} />
      <Route path="/StudentClassroom" element={<StudentClassroom />} />
     
      

      

      {/* Protected Route */}
      <Route
        path="/student"
        element={isAuthenticated ? <StudentDashboard /> : <Navigate to="/signin" />}
      />

      {/* Fallback for Undefined Routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
