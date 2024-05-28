// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const navbarSchema = new mongoose.Schema({
  items: [String],
});
const Navbar = mongoose.model('Navbar', navbarSchema);

app.get('/api/navbar', async (req, res) => {
  const navbar = await Navbar.findOne();
  res.json(navbar);
});

app.put('/api/navbar', async (req, res) => {
  const { items } = req.body;
  const navbar = await Navbar.findOneAndUpdate({}, { items }, { new: true, upsert: true });
  res.json(navbar);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
