const { MessageEmbed } = require("discord.js");

module.exports = class instagram {
    constructor(client) {
        this.client = client;
        this.name = "instagram";
        this.aliases = ["insta"];

        this.ownerOnly = false;
    }

    async run({ message }) {

        message.delete()

        let embed = new MessageEmbed()
            .setAuthor({ name: "INSTAGRAM", iconURL: `https://cdn.discordapp.com/emojis/968693388763336704.webp?size=80&quality=lossless` })
            .setDescription(`Acesse o instagram oficial do NeymarJr e de nossa página oficial!
            
            [Clique aqui](https://instagram.com/neymarjr) para ser direcionado até o instagram do Neymar.
            [Clique aqui](https://instagram.com/neymar10photos) para ser direcionado até nossa página.`)
            .setColor(`#9117cf`)

        message.channel.send({ embeds: [embed] }).catch(() => { }).then(msg => setTimeout(() => { message.delete().catch(() => { }); msg.delete().catch(() => { }); }, 7000)).catch(() => { });
    }
}