function bot(body) {
    var param = body.message.text.trim().split(" ");
    // remove empty strings
    param = param.filter(function(para) {
        if (para) {
            return true;
        }
    });
    if (Const.useBot === true) {
        if (body.message.text.indexOf("/start") === 0) {
            var sendMessage = {
                "method": "sendMessage",
                "chat_id": body.message.chat.id,
                "text": "Hi, I am a bot can tell you about the number who have been completed vaccination in Malaysia everyday!\nSimply click on /state"
            }
            return sendMessage;
        }
        if (body.message.text.indexOf("/state") === 0) {
            var sendMessage = {
                "method": "sendMessage",
                "chat_id": body.message.chat.id,
                "text": getFormatVaccination(),
                "parse_mode": "Markdown"

            }
            return sendMessage;
        }
        if (body.message.text.indexOf("/info") === 0) {
            var sendMessage = {
                "method": "sendMessage",
                "chat_id": body.message.chat.id,
                "parse_mode": "Markdown",
                "disable_web_page_preview": true,
                "text": "I am a bot making count for daily vaccine count in Malaysia🇲🇾.\nAll the data source are from [CITF-Malaysis/citf-public](https://github.com/CITF-Malaysia/citf-public).\nA thousand thanks to [this hero](https://github.com/limhenry).\n\nSource code:\nhttps://github.com/manho30/MyVaxCountBot.\nDeveloped by [@manho30](tg://user?id=" + Const.myId + ")."
            }
            return sendMessage;
        }
        if (body.message.text.indexOf("/school") === 0) {
            if (param[1]) {
                var sendMessage = {
                    "method": "sendMessage",
                    "chat_id": body.message.chat.id,
                    "parse_mode": "Markdown",
                    "disable_web_page_preview": true,
                    "text": getFormatSchoolVaccination(param[1].toUpperCase())
                }
                return sendMessage
            } else {
                var sendMessage = {
                    "method": "sendMessage",
                    "chat_id": body.message.chat.id,
                    "parse_mode": "Markdown",
                    "text": "Must entered the school code to find.\nExample: `/school KBC3066`"
                }
                return sendMessage
            }
        }
        if (body.message.text.indexOf("/history") === 0) {
            if (param[1]) {
                if (checkDate(param[1])) {
                    var sendMessage = {
                        "method": "sendMessage",
                        "chat_id": body.message.chat.id,
                        "parse_mode": "markdown",
                        "text": "*Vaccination:*\n\n" + getFormatVaccination(param[1]) + "\n\n\n*Comfirmed case:*\n\n" + getFormatCase(param[1])
                    }
                    return sendMessage;
                } else {
                    var sendMessage = {
                        "method": "sendMessage",
                        "chat_id": body.message.chat.id,
                        "text": `${body.message.text.replace("/history", "")} is not an valid date.`
                    }
                    return sendMessage;
                }
            } else {
                var sendMessage = {
                    "method": "sendMessage",
                    "chat_id": body.message.chat.id,
                    "parse_mode": "Markdown",
                    "text": "Date needed.\nExample: `/history 2020-07-31`"
                }
                return sendMessage;
            }
        }
        if (body.message.text.indexOf("/case") === 0) {
            var sendMessage = {
                "method": "sendMessage",
                "chat_id": body.message.chat.id,
                "parse_mode": "Markdown",
                "disable_web_page_preview": true,
                "text": getFormatCase()
            }
            return sendMessage
        }
    } else {
        var sendMessage = {
            "method": "sendMessage",
            "chat_id": body.message.chat.id,
            "parse_mode": "Markdown",
            "disable_web_page_preview": true,
            "text": "⛔MY vaccine Bot is temporary stopped now."
        }
        return sendMessage
    }
}