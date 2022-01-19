const channel = "@myvaccinecount"
const id = Const.myId 

const AutoSendMessage = async () => {
    const sendVaccination = await sendMessage(id, getFormatVaccination(parseVaccination(getVaccination())));
    const sendCase = await sendMessage(id,getFormatCase(parseCase(getCases())));
    const resVax = await postTelegram(sendVaccination);
    const resCase = await postTelegram(sendCase);
}
