/**
 * @file Sample Trigger command.
 * @author Naman Vrati
 * @since 2.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').TriggerCommand}
 */
module.exports = {
	name: ["coucou", "bonjour", "bonsoir", "hello", "hola", "salut", "yo"],

	async execute(message, args) {
		// React to the message with a waving hand emoji 👋
		try {
			await message.react("👋");
		} catch (error) {
			console.error("Failed to react to message:", error);
		}
	},
};
