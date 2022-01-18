const population = 32657400

const full = "▬"
const empty = "▭"
const width = 15;

const countNeededDay = (today_vax, all_vax) => {
    const today_vax_percent = (today_vax / population * 100).toFixed(1)
    const un_vax = population - all_vax
    const un_vax_percent = (un_vax / population * 100).toFixed(1)
    const result = Math.round(un_vax_percent / today_vax_percent)
    return result
}
const tester = () => {Logger.log(countNeededDay(237703,9609454))}
const generateBar = (value) => {
    const pop = Math.min(Math.max(value, 0), population);
    const progress = pop / population * 100;
    const progressInt = Math.floor(progress * width / 100);
    const restInt = width - progressInt;

    return `${full.repeat(progressInt)}${empty.repeat(restInt)}`;

}

const vaccinatedPercentage = (value, population) => {
    return (value / population * 100).toFixed(2) + "%";
}

const toPercent = (num) => {
    return parseFloat(parseFloat(num).toFixed(2)) + "%"
}

const parseCurrency = (num) => {
    return (num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
}

const getDates = () => {
    var dates = []
    var today = new Date();
    var todayMonth = today.getMonth() + 1
    if (parseInt(todayMonth) < 10) {
        todayMonth = "0" + todayMonth;
    }
    var todayDate = today.getDate() - 1
    if (parseInt(todayDate) < 10) {
        todayDate = "0" + todayDate;
    }
    var date = today.getFullYear() + "-" + todayMonth + "-" + todayDate;
    return date
}

const checkDate = (date) => {
    var regex = /\d{4}-\d{2}-\d{2}/
    return regex.test(date)
}

const generateMarkdownLink = (text,link) => {
    return "[" + escapeMarkDown(text) + "](" + escapeMarkDown(link) + ")";
}
const escapeMarkDown = (toEscapeMsg) => {
  var escapedMsg = toEscapeMsg
  .replace(/_/g, "\\_")
  .replace(/\*/g, "\\*")
  .replace(/\[/g, "\\[")
  .replace(/`/g, "\\`");
    return escapedMsg;
}
