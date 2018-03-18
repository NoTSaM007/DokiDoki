const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SmugtCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'smug',
            group: 'group1',
            memberName: 'smug',
            description: 'Sends a Smug'
        });
    }

	async run(msg, args) {
        var imgsmug = {
            "0": "http://i0.kym-cdn.com/photos/images/original/001/087/562/93c.gif",
            "1": "http://i0.kym-cdn.com/photos/images/newsfeed/001/161/167/eda.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/08/smug-anime-gif.gif",
            "3": "https://vignette.wikia.nocookie.net/vsbattles/images/e/e8/Smug_tokyo_ravens.gif/revision/latest?cb=20170525052602",
            "4": "http://i0.kym-cdn.com/photos/images/newsfeed/000/928/760/db8.gif",
            "5": "https://thumbs.gfycat.com/AccurateSafeAfricanparadiseflycatcher-max-1mb.gif",
            "6": "http://i0.kym-cdn.com/photos/images/newsfeed/000/993/093/e39.gif",
            "7": "https://i.imgur.com/S4vTLpP.gif",
            "8": "https://i.pinimg.com/originals/0a/c2/ff/0ac2ff9ec856f14485a35e3ab424234c.gif",
            "9": "https://animetree.files.wordpress.com/2013/05/date-a-live-tohka.gif?w=450",
            "10": "https://steamusercontent-a.akamaihd.net/ugc/393299547833148708/D7C20604394ECA0737B19BFCEAFBEF91E953AC33/",
 /*IS*/     "11": "http://i0.kym-cdn.com/photos/images/original/000/930/862/f1a.gif",
            "12": "https://media.giphy.com/media/EnfD4YqsHvwUU/giphy.gif",
            "13": "http://i0.kym-cdn.com/photos/images/newsfeed/001/094/794/1bf.gif",
            "14": "http://pa1.narvii.com/6058/0a3815a11d02e09fc5e83c1d3b67d304c3581091_hq.gif",
            "15": "https://thumbs.gfycat.com/DescriptiveSmartKitty-max-1mb.gif",
            "16": "http://images6.fanpop.com/image/photos/36400000/Gintama-image-gintama-36462581-500-282.gif",
            "17": "https://avatars.mds.yandex.net/get-pdb/224463/19be5ce7-6ff2-4116-a631-83021e3231a0/orig",
            "18": "https://68.media.tumblr.com/254c921a2e7138bb20d3c28a0ec27102/tumblr_omo6hwUkUJ1shmkc9o1_r2_540.gif",
            "19": "http://i0.kym-cdn.com/photos/images/newsfeed/000/928/963/ab3.gif",
        };
           const embed = new RichEmbed()
                .setDescription(msg.author + ' is Smuging' )  
                .setImage(imgsmug[Math.floor(Math.random() * Object.keys(imgsmug).length).toString()])
                .setColor(0x23ff12)
            return msg.embed(embed);
        }
	};