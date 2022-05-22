const colors = require("colors");

module.exports = class {
    constructor(client) {
        this.client = client;
        this.eventName = "ready";
    }
    async run() {
        const getRandomRichPresence = (size) => [`O pai tá on com ${size} seguidores!`, `O neymar está online e roteando.`][Math.floor(Math.random() * 2)]
        const updatedRichPresence = () => {
            let msg = getRandomRichPresence(this.client.users.cache.size);

            this.client.user.setActivity(msg, {
                game: {
                    type: 1
                }
            });

        }
        setInterval(updatedRichPresence, 1000 * 10);
        console.log(colors.green(`[${this.client.user.username}] o neymar está onfire e online!`));
    } catch(error) {
        console.log(error);
    }
}