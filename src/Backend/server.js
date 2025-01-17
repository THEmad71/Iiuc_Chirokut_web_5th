const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Middleware for parsing JSON
app.use(bodyParser.json());

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Sample complaints data (with topic, details, photos, and status)
let complaints = [
  { id: 1, topic: 'Broken chair', details: 'The chair in classroom 101 is broken and unsafe to use.', photos: [], date: '2025-01-01', status: 'On Process' },
  { id: 2, topic: 'Unclean washroom', details: 'The washroom near the library has not been cleaned for a week.', photos: [], date: '2025-01-02', status: 'Solved' },
  { id: 3, topic: 'WiFi issue', details: 'The WiFi in the library is not working, preventing students from studying.', photos: [], date: '2025-01-03', status: 'Rejected' }
];

// Endpoint to get all complaints
app.get('/complaints', (req, res) => {
  res.json(complaints);
});

// Endpoint to create a new complaint with topic, details, and photo upload
app.post('/complaints', upload.array('photos', 3), (req, res) => {
  const { topic, details } = req.body;
  const photos = req.files ? req.files.map(file => file.path) : []; // Store photo paths
  
  if (topic && details) {
    const newComplaint = {
      id: complaints.length + 1, // Simple id generation
      topic,
      details,
      photos,
      date: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
      status: 'On Process' // Default status
    };
    complaints.push(newComplaint);
    res.status(201).json(newComplaint); // Respond with the created complaint
  } else {
    res.status(400).json({ message: 'Topic and details are required' }); // Handle missing topic or details
  }
});

// Endpoint to update the status of a complaint
app.put('/complaints/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // Expecting "Solved," "On Process," or "Rejected"

  const complaint = complaints.find(c => c.id === parseInt(id));

  if (!complaint) {
    return res.status(404).json({ message: 'Complaint not found' });
  }

  if (!['Solved', 'On Process', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  complaint.status = status; // Update the status
  res.json(complaint); // Respond with the updated complaint
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
