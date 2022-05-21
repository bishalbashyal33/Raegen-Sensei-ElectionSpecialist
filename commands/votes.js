const { SlashCommandBuilder } = require('@discordjs/builders');
// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// URL of the page we want to scrape
const url = "https://election.ekantipur.com/pradesh-3/district-kathmandu/kathmandu?lng=eng";
module.exports = {
	data: new SlashCommandBuilder()
		.setName('votes')
		.setDescription('Displays current vote update!'),
	async execute(interaction) {
		try {
			// Fetch HTML of the page we want to scrape
			const { data } = await axios.get(url);
			// Load HTML we fetched in the previous line
			const $ = cheerio.load(data);
			// Select all the list items in plainlist class
			const listItems = $("body > div.container > div.card.p-3.my-4 > div > div.col-xs-12.col-lg > div.card-body.section-1 > div > div:nth-child(1) > div > div > ul");
		   //console.log(listItems.text());
		   let first = listItems.children().first();
		   let second = first.next();
		   let third = second.next();
		   console.log(first.text());
		   console.log(second.text());
		   console.log(third.text());
		   return interaction.reply(`${first.text()} \n ${second.text()} \n ${third.text()}`);

		  } catch (err) {
			console.error(err);
		  }
	},
};
