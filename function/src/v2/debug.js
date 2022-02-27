var testList2 = '{"update_id":427275035,"message":{"message_id":211,"from":{"id":539065210,"is_bot":false,"first_name":"Yufeng Deng","last_name":"峰哥","username":"fennng","language_code":"en-US"},"chat":{"id":"1381836444","first_name":"Yufeng Deng","last_name":"峰哥","username":"fennng","type":"private"},"date":1540807486,"text":"/history 2021-07-19","entities":[{"offset":0,"length":5,"type":"bot_command"}]}}';
var isDebug = false;

var pin = '{"update_id":793912414,"channel_post":{"message_id":5,"sender_chat":{"id":-1001531091343,"title":"Test","type":"channel"},"chat":{"id":-1001531091343,"title":"Test","type":"channel"},"date":1642639032,"pinned_message":{"message_id":4,"sender_chat":{"id":-1001531091343,"title":"Test","type":"channel"},"chat":{"id":-1001531091343,"title":"Test","type":"channel"},"date":1642639029,"text":"dhdh"}}}'
function debug() {
  e = {};
  e.postData = {};
  e.postData.contents = pin //testList2;
  doPost(e);
}
function testing(){
   Logger.log(checkDate("2020-12-31"))
}

function testGetResult() {
    var data = getSchoolData("KEB307") 
    Logger.log(data)
}
const testVax = () => {
  Logger.log(getFormatVaccination(parseVaccination(getVaccination())))
} 
  
const testVax2 = () => {
  Logger.log(parseVaccination(getVaccination()))
}