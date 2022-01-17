const AutoSendMessage = () => {
    const sendVaccination = {
        "method": "sendMessage",
        "chat_id": "@myvaccinecount",
        "text": getFormatVaccination(),
        "parse_mode": "Markdown",
        "disable_web_page_preview": true,
    };
    const sendCase= {
        "method": "sendMessage",
        "chat_id": "@myvaccinecount",
        "text": getFormatCase(),
        "parse_mode": "Markdown",
        "disable_web_page_preview": true,
    };
    postTelegram(sendVaccination);
    postTelegram(sendCase);
}