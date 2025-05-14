module.exports = {
    name: 'messageDelete',
    async execute(message) {
        // Ignore les messages système ou les messages sans contenu (embeds, etc.)
        if (!message.guild || message.author.bot || !message.content) return;

        // Nom du salon logs (à adapter selon ton serveur)
        const logChannel = message.guild.channels.cache.find(channel => channel.name === "logs");

        if (!logChannel) return console.warn("Salon 'logs' introuvable.");

        logChannel.send({
            content: `🗑️ Un message a été supprimé dans <#${message.channel.id}> par **${message.author.tag}** :\n> ${message.content}`
        });
    }
};
