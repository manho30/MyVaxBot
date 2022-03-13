# My Vax Bot
![img](https://raw.githubusercontent.com/manho30/manho30.github.io/main/assets/vax_bot.png)

A Telegram bot print out Malaysia 🇲🇾 
- **vaccination data**
- **daily confirmed case(s)**  


🔷 Written in `JavaScript`.

🔷 Working on `Google App Script`. 

## Features
- school vaccinations
- history track 
- daily vaccinations data 
  - aadolescents 
  - children 
  - adult 

### Versions of bot 
- v1 (_old versions_) 
  - daily vaccinations message
  - progress bar
  - percentage of daily new vaccination

- v2
  - features same as v1
  - Estimate duration for dose(s) 
    to reach 80% coverage 
  - tree shape data formated
  - adolescent, child daily 
    vaccinations percentage


Channel: [@myvaccinecount](https://t.me/myvaccinecount)<br>
Bot: [@myvaccinecountbot](https://t.me/myvaccinecountbot) 

## Plattform
- Google App Script (based JS API)
- Telegram Bot API

## Build Setup

This a simple explanation. 
Maybe it's not useful for beginners.

### Install 

```bash
$ git clone https://github.com/manho30/MyVaxCountBot
$ cd function/src/
$ npm install @google/clasp -g
```

You could choose the version you like 

### Edit Const.js

- Change your own `bot_token`.
- Change `Const.myId` to your personal ID.

### Push the code to Google 

Manually push the code 

Open [this link](https://script.google.com/home/)
- Create a app script project 
- Put all the code
- Save and deploy


### Webhook
**On Google App Script**
- Open `const.js`
- Click on PUBLISH button and copy the URL. 
   - Change the `Const.gasLink` with the URL. 
   - Save 
   - Open `webhook.gs`, run `fetchingWebhook` function.

### Trigger job
Don't forget to setup the trigger 
if you are planning to sent daily data 
in channel. 

- Open the project and 
create a new trigger. 
- Select `AutoSendMessage` as function to run. 
- Select `Day timer` as type of time based trigger

Note: You are free to fill in 
      the `hour interval` options, 
      but preferably after 8am. 

More about Telegram Bot API 
please visit [here](https://core.telegram.org/bots/api)
