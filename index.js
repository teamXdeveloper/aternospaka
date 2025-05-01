const mineflayer = require('mineflayer');

// Create the bot
function createBot() {
    const bot = mineflayer.createBot({
        host: 'OGonly.aternos.me', // The server IP you want the bot to join
        port: 23390,            // Default Minecraft port
        username: 'LokkaMalli',    // Bot’s username (can be a normal Minecraft account)
        password: '123456', // If using a Microsoft account, you might need additional steps for authentication
        version: '1.21.4'       // Make sure the version matches the server’s version
    });

    // Event: When bot logs in
    bot.on('spawn', () => {
        console.log('Bot has logged in!');
        bot.chat('Hello huththo kohomada ?????');
    });

    // Event: When bot disconnects
    bot.on('end', () => {
        console.log('Bot disconnected, reconnecting...');
        setTimeout(createBot, 10000);  // Try reconnecting after 10 seconds
    });

    // Event: When bot encounters an error
    bot.on('error', (err) => {
        console.log('Bot encountered an error:', err);
        bot.end();  // Disconnect and attempt to reconnect
    });
}

// Start the bot
createBot();
