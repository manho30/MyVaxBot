const population = 32657400
const full = "▬"
const empty = "▭"
const width = 15;

function generateBar(value) {
    const pop = Math.min(Math.max(value, 0), population);
    const progress = pop / population * 100;
    const progressInt = Math.floor(progress * width / 100);
    const restInt = width - progressInt;

    return `${full.repeat(progressInt)}${empty.repeat(restInt)}`;

}

function vaccinatedPercentage(value, population) {
    return (value / population * 100).toFixed(2) + "%";
}

function toPercent(num) {
    return parseFloat(parseFloat(num).toFixed(2)) + "%"
}

function parseCurrency(num) {
    return (num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
}

function getDates() {
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

function checkDate(date) {
    var regex = /\d{4}-\d{2}-\d{2}/
    return regex.test(date)
}

function generateMarkdownLink(text,link){
    return "[" + escapeMarkDown(text) + "](" + escapeMarkDown(link) + ")";
}
function escapeMarkDown(toEscapeMsg) {
  var escapedMsg = toEscapeMsg
  .replace(/_/g, "\\_")
  .replace(/\*/g, "\\*")
  .replace(/\[/g, "\\[")
  .replace(/`/g, "\\`");
    return escapedMsg;
}