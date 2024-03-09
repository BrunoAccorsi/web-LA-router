const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('home page');
});

router.get('/login', (req, res) => {
  res.send('login page');
});

router.get('/register', (req, res) => {
  res.send('register page');
});

router.get('*', (req, res) => {
  res.send('page not found');
});

module.exports = router;
