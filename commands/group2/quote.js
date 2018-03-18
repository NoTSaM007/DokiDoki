const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class QuoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'group1',
            memberName: 'quote',
            description: 'What message do you want to quote?',
          
			args: [
				{
					key: 'idx',
					label: 'user',
					prompt: 'What message do you want to quote? (ID)',
					type: 'integer'
				}
			]
        });
    }
	async run(msg, args) {
        const msgid = msg.channel.fetchMessage(args.idx);
        const embed = new RichEmbed()
            .setDescription(msgid.content)
            .setColor(0x23ff12)
        return msg.embed(embed);
    }
};
