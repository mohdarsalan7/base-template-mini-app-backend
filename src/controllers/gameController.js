// controllers/gameController.js
const GameState = require('../model/GameState');

// @desc    Get user's game state
// @route   GET /api/game/state
const getGameState = async (req, res) => {
  // req.user.id is attached by the authMiddleware
  const gameState = await GameState.findOne({ user: req.user.id });

  if (gameState) {
    res.json(gameState);
  } else {
    res.status(404).json({ message: 'Game state not found' });
  }
};

// @desc    Update user's game state
// @route   POST /api/game/save
const saveGameState = async (req, res) => {
  const { score, maxCombo, achievements } = req.body;

  const gameState = await GameState.findOne({ user: req.user.id });

  if (gameState) {
    gameState.score = score ?? gameState.score;
    gameState.maxCombo = maxCombo ?? gameState.maxCombo;
    gameState.achievements = achievements ?? gameState.achievements;

    const updatedState = await gameState.save();
    res.json(updatedState);
  } else {
    res.status(404).json({ message: 'Game state not found' });
  }
};

module.exports = { getGameState, saveGameState };
