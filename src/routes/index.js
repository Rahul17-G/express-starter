const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.get('/error', (req, res, next) => {
  const err = new Error('This is a test error');
  err.status = 500;
  next(err);
});

module.exports = router;
