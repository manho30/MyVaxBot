const channel = "@myvaccinecount";
const id = Const.myId;

const AutoSendMessage = async () => {
    const sendVaccination = await sendMessage(channel, getFormatVaccination(parseVaccination(getVaccination())));
    const sendCase = await sendMessage(channel,getFormatCase(parseCase(getCases())));
    const resVax = await postTelegram(sendVaccination);
    const resCase = await postTelegram(sendCase);
    if(resVax.ok === true){
        const pinVax = await postTelegram(pinMsg(channel, resVax.result.message_id));
        Logger.log(`Result:${resVax}\n${pinVax}`)
    }
};
