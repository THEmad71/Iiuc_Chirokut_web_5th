import React from 'react';

const StudentPage = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to the Student Page</h2>
        <p className="text-center text-lg">You are successfully logged in!</p>
      </div>
    </div>
  );
};

export default StudentPage;
