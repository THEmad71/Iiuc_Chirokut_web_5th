import React, { useState } from "react";

const StudentClassroom = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", dueDate: "2025-01-20" },
    { id: 2, title: "Science Project", dueDate: "2025-01-25" },
  ]);

  const [materials, setMaterials] = useState([
    { id: 1, title: "Chapter 1 Notes", link: "#" },
    { id: 2, title: "Physics Video Lecture", link: "#" },
  ]);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-[#1A434E] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-center text-3xl font-bold">Student Classroom</h1>

        {/* Assignments Section */}
        <div className="bg-[#13323A] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Assignments</h2>
          <ul className="space-y-2">
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                className="bg-[#1E5A68] p-3 rounded-lg hover:bg-[#165158] transition"
              >
                <strong>{assignment.title}</strong> - Due: {assignment.dueDate}
              </li>
            ))}
          </ul>
        </div>

        {/* Class Materials Section */}
        <div className="bg-[#13323A] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Class Materials</h2>
          <ul className="space-y-2">
            {materials.map((material) => (
              <li
                key={material.id}
                className="bg-[#1E5A68] p-3 rounded-lg hover:bg-[#165158] transition"
              >
                <a
                  href={material.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  {material.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Classroom Discussion */}
        <div className="bg-[#13323A] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Classroom Discussion</h2>
          <div className="h-48 bg-[#1E5A68] p-4 rounded-lg overflow-y-auto">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <p key={index} className="mb-2">
                  {msg}
                </p>
              ))
            ) : (
              <p className="text-gray-300">No messages yet. Start the discussion!</p>
            )}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message"
              className="flex-grow p-3 bg-[#1E5A68] border border-blue-300 rounded-lg focus:ring focus:ring-blue-400 text-white"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-3 bg-blue-300 text-[#1A434E] font-semibold rounded-lg hover:bg-blue-400 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Join Video Meeting */}
        <div className="bg-[#13323A] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Video Meeting</h2>
          <a
            href="https://zoom.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            Click here to join the Zoom meeting
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentClassroom;
