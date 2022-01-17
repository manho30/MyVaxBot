const fetch = (link) =>	{
    return UrlFetchApp.fetch(link)
} 
const fetchingWebhook = () => {
    const res = fetch("api.telegram.org/bot"+Const.botToken+"/setWebhook?url=${Const.gasLink/")
    Logger.log(res)
}
const getUpdatesWebhook = () => {
    const res = fetch("api.telegram.org/bot"+Const.botToken+"/getUpdates/")
    Logger.log(res)
}
const deletewebhook = () => {
    const res = fetch("api.telegram.org/bot"+Const.botToken+"/deletewebhook/")
    Logger.log(res)
}