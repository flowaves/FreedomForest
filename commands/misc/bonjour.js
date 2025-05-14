/**
 * @file Bonjour command
 * @author Toi
 * @since 1.0.0
 * @version 1.0.0
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "bonjour",
	// Commande : !bonjour (ou selon le préfixe que tu utilises)

	execute(message, args) {
		// Remplace par l'ID du salon dans lequel tu veux envoyer "Bonjour"
		const salonID = "1372281932158730412"; // <-- À modifier

		const salon = message.client.channels.cache.get(salonID);

		if (!salon) {
			return message.channel.send({ content: "Salon introuvable." });
		}

		// Envoie "Bonjour" dans le salon spécifique
		salon.send({ content: "Bonjour" })
			.then(() => {
				console.log("Message envoyé avec succès !");
			})
			.catch((error) => {
				console.error("Erreur lors de l'envoi du message :", error);
			});
	},
};
