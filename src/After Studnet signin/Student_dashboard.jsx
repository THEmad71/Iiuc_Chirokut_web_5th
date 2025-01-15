import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState({ topic: '', details: '', photos: [] });

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('http://localhost:5000/complaints');
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
      newComplaint.photos.forEach(photo => formData.append('photos', photo));

      try {
        const response = await fetch('http://localhost:5000/complaints', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const savedComplaint = await response.json();
          setComplaints([...complaints, savedComplaint]);
          setNewComplaint({ topic: '', details: '', photos: [] });
        } else {
          console.error('Error submitting complaint:', response.status);
        }
      } catch (err) {
        console.error('Error submitting complaint:', err);
      }
    }
  };

  return (
    <div className="dashboard flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="sidebar w-64 bg-teal-600 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li><a href="#classroom" className="block px-3 py-2 rounded hover:bg-teal-700">Classroom</a></li>
            <li><a href="#messages" className="block px-3 py-2 rounded hover:bg-teal-700">Messages</a></li>
            <li><a href="#assignments" className="block px-3 py-2 rounded hover:bg-teal-700">Assignments</a></li>
            <li><a href="#complaints" className="block px-3 py-2 rounded hover:bg-teal-700">Complaints</a></li>
            <li><a href="#study-materials" className="block px-3 py-2 rounded hover:bg-teal-700">Study Materials</a></li>
            <li><a href="#logout" className="block px-3 py-2 rounded bg-red-600 hover:bg-red-700">Logout</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content flex-1 p-6">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-white p-4 rounded shadow-md border-l-4 border-teal-600">
            <h3 className="text-lg font-semibold">Your Complaints</h3>
            <p className="text-3xl font-bold">{complaints.length}</p>
          </div>
          {/* Add other cards */}
        </div>

        {/* Complaints Section */}
        <section id="complaints" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Complaints</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Complaint Topic"
              value={newComplaint.topic}
              onChange={(e) => setNewComplaint({ ...newComplaint, topic: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded mb-2"
            />
            <textarea
              placeholder="Complaint Details"
              value={newComplaint.details}
              onChange={(e) => setNewComplaint({ ...newComplaint, details: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded mb-2"
            ></textarea>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setNewComplaint({ ...newComplaint, photos: Array.from(e.target.files) })}
              className="w-full p-2 rounded mb-2"
            />
            <button
              onClick={handleAddComplaint}
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Submit Complaint
            </button>
          </div>
          <table className="table-auto w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Topic</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id} className="border-t">
                  <td className="px-4 py-2">{complaint.topic}</td>
                  <td className="px-4 py-2">{complaint.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
