import React, { useState, useEffect } from 'react';

const Studymaterial = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch study materials');
        }
        const data = await response.json();
        setMaterials(data);
      } catch (error) {
        console.error('Error fetching study materials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const handleCardClick = (material) => {
    setSelectedMaterial(material);
  };

  const handleCloseDetails = () => {
    setSelectedMaterial(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Study Material - NASA</h1>

      {/* Loading State */}
      {loading ? (
        <p>Loading...</p>
      ) : selectedMaterial ? (
        // Detailed View Modal
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-2/3 relative overflow-y-auto max-h-screen">
            <button
              onClick={handleCloseDetails}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedMaterial.url}
              alt={selectedMaterial.title}
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">{selectedMaterial.title}</h2>
            <p className="text-lg text-gray-300 mt-4">{selectedMaterial.explanation}</p>
          </div>
        </div>
      ) : (
        // Materials List View
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
              onClick={() => handleCardClick(material)}
            >
              <img
                src={material.url}
                alt={material.title}
                className="rounded-md mb-4 h-40 object-cover w-full"
              />
              <h2 className="text-xl font-semibold">{material.title}</h2>
              <p className="text-sm text-gray-400">{material.explanation.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Studymaterial;
