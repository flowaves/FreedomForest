/**
 * @file Ready Event File.
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

const { Events, ActivityType } = require("discord.js");

module.exports = {
	name: Events.ClientReady,
	once: true,

	/**
	 * @description Executes when the client is ready (bot initialization).
	 * @param {import('../typings').Client} client Main Application Client.
	 */
	execute(client) {
		console.log(`✅ Ready! Logged in as ${client.user.tag}`);

		// Set custom presence with actual status and activity
		client.user.setPresence({
			status: 'online', // 🟢 online | 🌙 idle | ⛔ dnd | ⚪ invisible
			activities: [
				{
					name: "flowaves est un goat",
					type: ActivityType.Watching, // Playing, Listening, Watching, Competing
				},
			],
		});
	},
};
