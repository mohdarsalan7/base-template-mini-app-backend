// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const {
  getGameState,
  saveGameState,
} = require('../controllers/gameController');
const { protect } = require('../middleware/authMiddleware');

// All routes here are protected
router.route('/state').get(protect, getGameState);
router.route('/save').post(protect, saveGameState);

module.exports = router;
