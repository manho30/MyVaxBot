# Vaccine Count Bot
![](/assets/bot.jpg)
Channel: [@myvaccinecount](https://t.me/myvaccinecount)<br>
Bot: [@myvaccinecountbot](https://t.me/myvaccinecountbot) 

## Plattform
- Google App Script (based JS API)
- Telegram Bot API

## Build Setup
```
This a simple explanation. Mayb it's not useful for beginners.
```

### Install 
```
$ git clone https://github.com/manho30/MyVaxCountBot
$ cd function/src/
$ npm install @google/clasp -g
$ code . 
```

### Edit Const.js

- Change your own `bot_token`.
- Change `Const.myId` to your personal ID.
![](/assets/const.png)

### Push the code to Google

```
$ npm install 

# clasp login will pop up an login page 
$ clasp login 

# it will create a new project
$ clasp create <script_name> 

# enter in terminal once you done with the code
$ clasp push

# it's important, you must deploy it 
# clasp deploy
```
More about using `clasp` Please visit [here](https://developers.google.com/apps-script/guides/clasp)
### Webhook
- Open [this link](https://script.google.com/home/)
- Find the project you created just now and go to `const.js`
- Simply click on PUBLISH button and copy the URL
   - Change the `Const.gasLink` to the URL you copy just now. 
   - Save it
   - Go to `fetch_telegram` and run `fetchingWebhook` function.
   ![](/assets/webhook.png)

More Telegram Bot API please wisit [here](https://core.telegram.org/bots/api)
