const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
var mal = require('maljs');
const MALjs = require('MALjs');

module.exports = class animeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'anime',
			aliases: [''],
			group: 'group4',
			memberName: 'anime',
			description: 'Shows an anime.',
			examples: ['anime Name'],

			args: [
				{
					key: 'name',
					label: 'user',
					prompt: 'Which anime would you like to see?',
					type: 'string',
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
 
/*	var aniname = ''+args.name;
	mal.quickSearch(aniname).then(function(results) {
        results.anime[0].fetch().then(function(r) {
        	var nam = r.sn.replace('_',' ');
        	const embed = new RichEmbed()
        	embed.setAuthor(nam, r.cover)
        	embed.addField("Description", r.description)
        	embed.setThumbnail(r.cover)

        	msg.channel.send(embed)

   });
});*/


const mal = new MALjs('DokiDokiBot', 'DokiDoki');

  	var embed = new RichEmbed()
// search my animelist
mal.anime.search('naruto')
  .then(result => {
  	var embed = new RichEmbed()
  	embed.setTitle(result.anime[0].title)
  	embed.addField("Description", result.anime[0].synopsis)
   	msg.channel.send(embed)   
  }

  ) // contains the json result on success
  .catch(err => console.log(err));
   
}
};