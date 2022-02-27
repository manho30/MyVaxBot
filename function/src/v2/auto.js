const channel = Const.channel
const logChannel = Const.log_channel

const AutoSendMessage = async () => {
    const sendVaccination = await sendMessage(channel, getFormatVaccination(parseVaccination(getVaccination())));
    const sendCase = await sendMessage(channel,getFormatCase(parseCase(getCases())));
    const resVax = await postTelegram(sendVaccination);
    const resCase = await postTelegram(sendCase);
    if(resVax.ok === true){
        const pinVax = await postTelegram(pinMsg(channel, resVax.result.message_id));
        const print_log = postTelegram(Const.log_channel, resVax)
        Logger.log(`Result:${resVax}\n${pinVax}`)
    }
};