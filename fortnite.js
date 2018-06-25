const Discord = require("discord.js");
const apikey = require("../keys.json");
const Client = require('fortnite');
const fortnite = new Client("fb25bf4b-b072-46d8-ac5e-d61bf751135a");

module.exports.run = async (bot ,message , args) => {
    await message.delete();
    let username = args[0];
    let platform = args[1] || 'pc';

    if(!username) return message.reply("Please Provide a Username!");

    let data = fortnite.user(username , platform).then(data =>{

let stats = data.stats;
let lifetime = stats.lifetime;
let score = lifetime[6]['Score'];
let mPlayed = lifetime[7]['Matches Played'];
let wins = lifetime[8]['Wins'];
let winper = lifetime[9]['Win%'];
let kills = lifetime[10]['Kills'];
let kd = lifetime[11]['K/D'];


let embed = new Discord.RichEmbed()
.setTitle("Fortnite Tracker Lifetime Stats")
.setAuthor(data.username)
.setColor("#0000FF")
.addField("Wins", wins, true)
.addField("Kills", kills, true)
.addField("Score", score, true)
.addField("Matches Played", mPlayed, true)
.addField("Win Percentage", winper , true)
.addField("Kill/Death Ratio", kd , true);

message.channel.send(embed);


});



}

module.exports.help = {
    name:"fortnite"
}