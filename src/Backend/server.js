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

// Sample complaints data (with topic, details, and photos)
let complaints = [
  { id: 1, topic: 'Broken chair', details: 'The chair in classroom 101 is broken and unsafe to use.', photos: [], date: '2025-01-01' },
  { id: 2, topic: 'Unclean washroom', details: 'The washroom near the library has not been cleaned for a week.', photos: [], date: '2025-01-02' },
  { id: 3, topic: 'WiFi issue', details: 'The WiFi in the library is not working, preventing students from studying.', photos: [], date: '2025-01-03' }
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
      date: new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
    };
    complaints.push(newComplaint);
    res.status(201).json(newComplaint); // Respond with the created complaint
  } else {
    res.status(400).json({ message: 'Topic and details are required' }); // Handle missing topic or details
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
