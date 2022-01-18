const channel = Const.channel
const id = Const.myId

const AutoSendMessage = async () => {
    const sendVaccination = {
        "method": "sendMessage",
        "chat_id": channel,
        "text": getFormatVaccination(parseVaccination(getVaccination())),
        "parse_mode": "Markdown",
        "disable_web_page_preview": true,
    };
    const sendCase= {
        "method": "sendMessage",
        "chat_id": channel,
        "text": getFormatCase(parseCase(getCases())),
        "parse_mode": "Markdown",
        "disable_web_page_preview": true,
    };
    postTelegram(sendVaccination);
    postTelegram(sendCase);
}
