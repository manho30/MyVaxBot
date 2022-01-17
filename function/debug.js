const  testList2 = '{"update_id":427275035,"message":{"message_id":211,"from":{"id":539065210,"is_bot":false,"first_name":"unknow","language_code":"en-US"},"chat":{"id":' + const.myId + ',"first_name":"unknow","type":"private"},"date":1540807486,"text":"/history 2020-07-31","entities":[{"offset":0,"length":5,"type":"bot_command"}]}}';
const  isDebug = false;
 
const debug = () => {
  e = {};
  e.postData = {};
  e.postData.contents = testList2;
  doPost(e);
}
const testing = () => {
   Logger.log(checkDate("2020-12-31"))
}

const testGetResult = () => {
    var data = getSchoolData("KEB307") 
    Logger.log(data)
}