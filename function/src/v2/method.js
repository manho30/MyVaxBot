const sendMessage = (chat_id, text) => {
    return {
        "method": "sendMessage",
        "chat_id": chat_id,
        "parse_mode": "Markdown",
        "text": text
    }
};
const sendChatAction = (chat_id, action) => {
    return {
        "method": "sendChatAction",
        "chat_id": chat_id,
        "action": action
    } 
} 
const pinMsg = (chat_id, msg_id) => {
    return {
        "method": "pinChatMessage",
        "chat_id": `${chat_id}`,
        "message_id": `${msg_id}`
    }
};

const deleteMsg = (chat_id, msg_id) => {
    return {
        "method": "deleteMessage",
        "chat_id": `${chat_id}`,
        "message_id": `${msg_id}`
    }
};