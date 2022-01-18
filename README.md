# Vaccine Count Bot
![image](/function/assets/bot.jpg)
Channel: [@myvaccinecount](https://t.me/myvaccinecount)<br>
Bot: [@myvaccinecountbot](https://t.me/myvaccinecountbot) 

## Plattform
- Google App Script (based JS API)
- Telegram Bot API

## Before start
You must have / know:
- An Google Account, 
- A Telegram Bot from [FatherBot](https://t.me/@BotFather) 
- Basic JavaScript, 
- Basic of using Google App Script.

## Build and Set up
It's no need to set up any environment due to it's run on Google Cloud Server. <br>
Just follow the step below. <br>
- Open https://script.google.com/home
- Open a new project 
- Copy all the code 
- Change the `botToken` and `myId` to your own inside Const.js
``` javascript
var Const = {}
Const.botToken = "<BOT_TOKEN"
Const.myId = <YOUR ID>
Const.gasLink = "<YOUR LINK>" 
```
- After done all press on `Publish`
- Make sure you deply it like 👇
![image](/function/assets/deploy.jpg)
- And then you will get a link call as Gas Link
![image](/function/assets/deployed.jpg)
- Copy it and back to Const.js
- Change the `gaslink`
``` javascript
var Const = {}
Const.gasLink = "<YOUR LINK>" 
```
- Deploy it again
- Back to fetch_telegram.js
- Choose `Select Function` and `FetchingWebhook`
![image](/function/assets/fetch.jpg)
- Presss the run button 
![image](/function/assets/fetched.jpg)
- And your bot can work as normal now.
## Source
[Malaysia CITF official Github](https://github.com/CITF-Malaysia/citf-public/) <br>
[MoH-Malaysia official Github](https://github.com/MoH-Malaysia/covid19-public)
## Referenced from
https://github.com/limhenry/myvaccinecount
## License
The project is published under the [MIT license](https://github.com/manho30/MyVaxCountBot/blob/main/LICENSE).
