const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserController = require('./controllers/userController');
const dbURI = 'mongodb://127.0.0.1:27017/my_database'

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Initialize Express
const app = express();
app.use(bodyParser.json());

// Routes
app.post('/api/users', UserController.createUser);
// app.get('/api/users/:id', UserController.getUserById);
// app.put('/api/users/:id', UserController.updateUser);
// app.delete('/api/users/:id', UserController.deleteUser);
// app.post('/api/login', UserController.login);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});