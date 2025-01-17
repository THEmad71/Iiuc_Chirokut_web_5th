import React, { useState } from 'react';

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState({ ...profile });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile({ ...editProfile });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditProfile({ ...profile });
    setIsEditing(false);
  };

  const handleCloseDetails = () => {
    setIsEditing(false); // Close editing view
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-gray-300">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg relative overflow-y-auto max-h-screen">
        {/* Close Button */}
        {isEditing && (
          <button
            onClick={handleCloseDetails}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            &times;
          </button>
        )}
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'white' }}>
          My Profile
        </h2>

        {/* Profile Info */}
        {!isEditing ? (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Name:</label>
              <p className="text-lg font-semibold">{profile.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Email:</label>
              <p className="text-lg font-semibold">{profile.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Phone:</label>
              <p className="text-lg font-semibold">{profile.phone}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Address:</label>
              <p className="text-lg font-semibold">{profile.address}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleEdit}
                className="px-6 py-2 rounded bg-teal-500 text-white hover:bg-teal-600"
              >
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          // Profile Edit Form
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Name:</label>
              <input
                type="text"
                value={editProfile.name}
                onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded text-gray-300 border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Email:</label>
              <input
                type="email"
                value={editProfile.email}
                onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded text-gray-300 border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Phone:</label>
              <input
                type="tel"
                value={editProfile.phone}
                onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded text-gray-300 border border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Address:</label>
              <textarea
                value={editProfile.address}
                onChange={(e) =>
                  setEditProfile({ ...editProfile, address: e.target.value })
                }
                className="w-full p-2 bg-gray-700 rounded text-gray-300 border border-gray-600"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-6 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded bg-teal-500 text-white hover:bg-teal-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
