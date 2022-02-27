// excuete when need to post any message in channel.
const postChannel = () => {
    Logger.log(`Result: ${postTelegram(sendMessage(channel, "Helloworld"))}`);
} 
