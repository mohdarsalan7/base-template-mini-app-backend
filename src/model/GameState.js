// models/GameState.js
const mongoose = require('mongoose');

const gameStateSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Links this state to a user
    },
    score: {
      type: Number,
      default: 0,
    },
    maxCombo: {
      type: Number,
      default: 0,
    },
    achievements: {
      type: [String], // Array of achievement IDs
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const GameState = mongoose.model('GameState', gameStateSchema);
module.exports = GameState;
