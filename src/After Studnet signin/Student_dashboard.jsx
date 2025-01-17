import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState({ topic: '', details: '', photos: [] });
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('http://localhost:5000/complaints');
        if (!response.ok) throw new Error('Failed to fetch complaints');
        const data = await response.json();
        setComplaints(data);
      } catch (err) {
        console.error('Error fetching complaints:', err);
      }
    };

    fetchComplaints();
  }, []);

  const handleAddComplaint = async () => {
    if (newComplaint.topic.trim() && newComplaint.details.trim()) {
      const formData = new FormData();
      formData.append('topic', newComplaint.topic);
      formData.append('details', newComplaint.details);
      newComplaint.photos.forEach((photo) => formData.append('photos', photo));

      try {
        const response = await fetch('http://localhost:5000/complaints', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Error submitting complaint');
        const savedComplaint = await response.json();
        setComplaints((prevComplaints) => [...prevComplaints, savedComplaint]);
        setNewComplaint({ topic: '', details: '', photos: [] });
      } catch (err) {
        console.error('Error submitting complaint:', err);
      }
    }
  };

  const handleSeeDetails = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseDetails = () => {
    setSelectedComplaint(null);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="dashboard flex min-h-screen text-gray-300 bg-gray-900">
      {/* Sidebar */}
      <aside className="sidebar fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#complaints" className="block px-3 py-2 rounded hover:bg-gray-700">
                  Complaints
                </a>
              </li>


              <li>

              <Link to="/Studymaterial" className="block px-3 py-2 rounded hover:bg-gray-700">
              Study material
              </Link>

              </li>
              <li>
              <Link to="/StudentClassroom" className="block px-3 py-2 rounded hover:bg-gray-700">
              
                  Classroom
                  </Link>
              </li>
        

              <li>
              <Link to="/my-profile" className="block px-3 py-2 rounded hover:bg-gray-700">
                My Profile
              </Link>
                </li>


            </ul>
          </nav>
        </div>
        <div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="block px-3 py-2 rounded bg-red-600 hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content ml-64 flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-800">Your Complaints</h3>
            <p className="text-4xl font-bold text-gray-700">{complaints.length}</p>
          </div>
        </div>

        <section id="complaints" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Complaints</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <input
              type="text"
              placeholder="Complaint Topic"
              value={newComplaint.topic}
              onChange={(e) => setNewComplaint({ ...newComplaint, topic: e.target.value })}
              className="w-full border border-gray-600 bg-gray-700 p-2 rounded mb-4 text-gray-300"
            />
            <textarea
              placeholder="Complaint Details"
              value={newComplaint.details}
              onChange={(e) => setNewComplaint({ ...newComplaint, details: e.target.value })}
              className="w-full border border-gray-600 bg-gray-700 p-2 rounded mb-4 text-gray-300"
            ></textarea>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setNewComplaint({ ...newComplaint, photos: Array.from(e.target.files) })}
              className="w-full p-2 bg-gray-700 rounded mb-4 text-gray-300"
            />
            <button
              onClick={handleAddComplaint}
              className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Submit Complaint
            </button>
          </div>
          {complaints.length > 0 ? (
            <table className="table-auto w-full bg-gray-800 rounded-lg shadow-md text-left">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-gray-300 font-medium">Topic</th>
                  <th className="px-6 py-3 text-gray-300 font-medium">Date</th>
                  <th className="px-6 py-3 text-gray-300 font-medium">Status</th>
                  <th className="px-6 py-3 text-gray-300 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id} className="border-t border-gray-700">
                    <td className="px-6 py-3 text-gray-300 font-medium">{complaint.topic}</td>
                    <td className="px-6 py-3 text-gray-300 font-medium">{complaint.date}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2 py-1 rounded ${
                          complaint.status === 'Solved'
                            ? 'bg-green-500 text-white'
                            : complaint.status === 'On Process'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-red-500 text-white'
                        }`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleSeeDetails(complaint)}
                        className="text-teal-500 hover:text-teal-400"
                      >
                        See Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400">No complaints available.</p>
          )}
        </section>

        {/* Complaint Details Modal */}
        {selectedComplaint && (
          <div className="modal fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center">
            <div className="modal-content bg-gray-800 p-6 rounded-lg shadow-lg w-1/2">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Complaint Details</h2>
              <p className="text-lg text-gray-300">
                <strong>Topic:</strong> {selectedComplaint.topic}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Details:</strong> {selectedComplaint.details}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleCloseDetails}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
          <div className="modal fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center">
            <div className="modal-content bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Confirm Logout</h2>
              <p className="text-gray-300 mb-6">Are you sure you want to log out?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
