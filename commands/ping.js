const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Displays current vote update!'),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};
