const sendMessage = (chat_id,text) => {
    return {
        "method": "sendMessage",
        "chat_id": chat_id,
        "parse_mode": "Markdown",
        "text": text
    }
}

const bot = (body) => {
    var param = body.message.text.trim().split(" ");
    // remove empty strings
    param = param.filter(function(para) {
        if (para) {
            return true;
        }
    });
    if (Const.useBot === true) {
        if (body.message.text.indexOf("/start") === 0) {
            return sendMessage(body.message.chat.id, "Hi, I am a bot can tell you about the number who have been completed vaccination in Malaysia everyday!\nSimply click on /state");
        }
        if (body.message.text.indexOf("/state") === 0) {
            return sendMessage(body.message.chat.id, getFormatVaccination());
        }
        if (body.message.text.indexOf("/info") === 0) {
            return sendMessage(body.message.chat.id, "I am a bot making count for daily vaccine count in Malaysia🇲🇾.\nAll the data source are from [CITF-Malaysis/citf-public](https://github.com/CITF-Malaysia/citf-public).\nA thousand thanks to [this hero](https://github.com/limhenry).\n\nSource code:\nhttps://github.com/manho30/MyVaxCountBot.\nDeveloped by [@manho30](tg://user?id=" + Const.myId + ").");
        }
        if (body.message.text.indexOf("/school") === 0) {
            if (param[1]) {
                return sendMessage(body.message.chat.id, getFormatSchoolVaccination(param[1].toUpperCase()));
            } else {
                return sendMessage(body.message.chat.id, "Must entered the school code to find.\nExample: `/school KBC3066`")
            }
        }
        if (body.message.text.indexOf("/history") === 0) {
            if (param[1]) {
                if (checkDate(param[1])) {
                    return sendMessage(body.message.chat.id, "*Vaccination:*\n\n" + getFormatVaccination(param[1]) + "\n\n\n*Comfirmed case:*\n\n" + getFormatCase(param[1])) ;
                } else {
                    return sendMessage(body.message.chat.id, `${body.message.text.replace("/history", "")} is not an valid date.`)
                }
            } else {
                return sendMessage(body.message.chat.id, "Date needed.\nExample: `/history 2020-07-31`");
            }
        }
        if (body.message.text.indexOf("/case") === 0) {
            return sendMessage(body.message.chat.id, getFormatCase())
        }
    } else {
        return sendMessage(body.message.chat.id, "⛔MY vaccine Bot is temporary stopped now.")
    }
}