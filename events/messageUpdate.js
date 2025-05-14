module.exports = {
    name: 'messageUpdate',
    execute(oldMessage, newMessage) {
        if (!oldMessage.guild || oldMessage.author.bot) return;
        if (oldMessage.content === newMessage.content) return;

        const logChannel = oldMessage.guild.channels.cache.find(c => c.name === 'logs');
        if (!logChannel) return;

        logChannel.send(`✏️ **${oldMessage.author.tag}** a modifié un message dans <#${oldMessage.channel.id}> :
**Avant :** ${oldMessage.content}
**Après :** ${newMessage.content}`);
    }
};
