/**Execute this fetchingWebhook function once you get the gas link **/
function fetchingWebhook() {
    var res = UrlFetchApp.fetch('api.telegram.org/bot' + Const.botToken + '/setWebhook?url=' + Const.gasLink)
    Logger.log(res)
}