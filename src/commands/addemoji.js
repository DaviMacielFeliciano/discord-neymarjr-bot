const { Util } = require('discord.js');

module.exports = class Addemoji {
    constructor(client) {
        this.client = client;
        this.name = "addemoji";
        this.aliases = [];

        this.ownerOnly = true;
    }

    async run({ message, args, prefix }) {
        try {
            if (!message.member.permissions.has("ADMINISTRATOR")) {
                message.reply(`Você não possui permissão para executar este comando.`).then(msg => setTimeout(() => { message.delete().catch(() => { }); msg.delete().catch(() => { }); }, 15000)).catch(() => { });
                return;
            }
            const emoji = args[0]
            if (!emoji) return message.reply(`Não foi informado nenhum emoji para ser adicionado.`);

            let emj = Util.parseEmoji(emoji)

            if (emj.id) {
                const link = `https://cdn.discordapp.com/emojis/${emj.id}.${emj.animated ? "gif" : "png"}`;
                const name = args[1];
                message.guild.emojis.create(
                    `${link}`,
                    `${name || `${emj.name}`}`
                ).catch(() => {
                    return message.reply("Seu servidor está com limites de emojis!");
                })
                message.reply(`O emoji foi adicionado com sucesso! ${name || `${emj.name}`}`)
            } else {
                let CheckEmoji = parse(emoji, { assetType: "png" });
                if (!CheckEmoji[0])
                    return message.reply(`O emoji enviado não é válido.`)
            }
        } catch (error) {
            console.log(error);
            console.log(`\x1b[91m[Commands] Ocorreu um erro ao executar o comando ${this.name}.js\x1b[0m`)
        }
    }
}