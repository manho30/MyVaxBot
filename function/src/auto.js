const channel = Const.channel
const id = Const.myId

const channel = "@myvaccinecount"
const id = 1381836444 

const AutoSendMessage = async () => {
    const sendVaccination = await sendMessage(id, getFormatVaccination(parseVaccination(getVaccination())));
    const sendCase = await sendMessage(id,getFormatCase(parseCase(getCases())));
    const resVax = await postTelegram(sendVaccination);
    const resCase = await postTelegram(sendCase);
}
