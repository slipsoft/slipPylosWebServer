const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
	loginPlayerWhite: {
		type: String,
		lowercase: true,
		trim: true,
		required: true
	},
	loginPlayerBlack: {
		type: String,
		lowercase: true,
		trim: true,
		required: true
	},
	winner: {
		type: String,
		lowerCase: true,
		trim: true,
		required: true
	},
	winnerScore: {
		type: Number,
		required: true
	},
	loserScore: {
		type: Number,
		required: true
	},
	datePlayed: {
		type: Date,
		default: Date.now()
	},
	moveList: [ {
		couleurPion: String,
		xPos: Number,
		yPos: Number,
		hauteur: Number
	} ]
});

module.exports = mongoose.model("game", gameSchema);
