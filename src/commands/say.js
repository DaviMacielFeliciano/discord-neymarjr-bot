const Command = require("../objects/command.js");

module.exports = class Say {
    constructor(client) {
        this.client = client;
        this.name = "say";
        this.aliases = [];

        this.ownerOnly = false;
    }

    async run({ message, args }) {

        message.delete()

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply(`Você não possui permissão para executar este comando.`).then(msg => setTimeout(() => { message.delete().catch(() => { }); msg.delete().catch(() => { }); }, 5000)).catch(() => { });
            return;
        }

        let say = args.join(" ")
        if (!say) return message.reply({ content: `Adicione alguma mensagem!` }).then(msg => setTimeout(() => { message.delete().catch(() => { }); msg.delete().catch(() => { }); }, 5000)).catch(() => { });


        message.channel.send(say).catch(() => { });
    }
}